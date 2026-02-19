$host_name = "ftp.zeeshanzia.com"
$username = "admin@zeeshanzia.com"
$password = "ZX6Z54A5"
$local_path = "d:\MY WORK2\Retro_Office_Work\ZZ_Git_GeekyWeb\Geeky-Nextjs\out"
$ftp_root = "ftp://$host_name/"
$skip_dataset_upload = $true # Set to $false if you want to force upload the dataset
$dry_run = $false # Set to $true to only simulate the deployment

function Get-FtpFileSize {
    param (
        [string]$remotePath
    )
    $uri = New-Object System.Uri($remotePath)
    $ftp = [System.Net.FtpWebRequest]::Create($uri)
    $ftp.Credentials = New-Object System.Net.NetworkCredential($username, $password)
    $ftp.Method = [System.Net.WebRequestMethods+Ftp]::GetFileSize
    
    try {
        $response = $ftp.GetResponse()
        $size = $response.ContentLength
        $response.Close()
        return $size
    }
    catch {
        return -1 # File doesn't exist or error
    }
}

function Upload-File {
    param (
        [string]$localFile,
        [string]$remotePath
    )

    $localSize = (Get-Item $localFile).Length
    $remoteSize = Get-FtpFileSize $remotePath

    if ($localSize -eq $remoteSize) {
        Write-Host "Skipped (Same Size): ${localFile}" -ForegroundColor Gray
        return
    }

    $uri = New-Object System.Uri($remotePath)
    $ftp = [System.Net.FtpWebRequest]::Create($uri)
    $ftp.Credentials = New-Object System.Net.NetworkCredential($username, $password)
    $ftp.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
    $ftp.UseBinary = $true
    $ftp.UsePassive = $true
    $ftp.KeepAlive = $false

    if ($dry_run) {
        Write-Host "[DRY RUN] Would upload: ${localFile} -> ${remotePath}" -ForegroundColor Yellow
        return
    }

    try {
        $content = [System.IO.File]::ReadAllBytes($localFile)
        $requestStream = $ftp.GetRequestStream()
        $requestStream.Write($content, 0, $content.Length)
        $requestStream.Close()
        Write-Host "Success: ${localFile} -> ${remotePath}" -ForegroundColor Green
    }
    catch {
        Write-Host "Error uploading ${localFile}: ${PSItem}" -ForegroundColor Red
    }
}

function Create-Directory {
    param (
        [string]$remotePath
    )

    $uri = New-Object System.Uri($remotePath)
    $ftp = [System.Net.FtpWebRequest]::Create($uri)
    $ftp.Credentials = New-Object System.Net.NetworkCredential($username, $password)
    $ftp.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory

    if ($dry_run) {
        Write-Host "[DRY RUN] Would create directory: ${remotePath}" -ForegroundColor Yellow
        return
    }

    try {
        $response = $ftp.GetResponse()
        $response.Close()
        Write-Host "Created Directory: ${remotePath}" -ForegroundColor Cyan
    }
    catch {
        # Directory might already exist, ignore errors
    }
}

Write-Host "Starting Optimized Deployment to $host_name..." -ForegroundColor Yellow
if ($skip_dataset_upload) {
    Write-Host "(Large dataset upload is DISABLED by default. Set `$skip_dataset_upload = `$false` in the script to enable it.)" -ForegroundColor Magenta
}

if (-not (Test-Path $local_path)) {
    Write-Host "Error: Local 'out' directory not found! Run 'npm run export' first." -ForegroundColor Red
    exit
}

$all_files = Get-ChildItem -Path $local_path -Recurse

# Pass 1: Prioritize UI/UX and Asset files (_next folder, CSS, JS, fonts)
Write-Host "`n[Pass 1] Uploading Critical UI/UX Assets (_next, CSS, JS)..." -ForegroundColor Cyan
foreach ($file in $all_files) {
    $relative = $file.FullName.Substring($local_path.Length + 1)
    
    # Identify critical assets
    $is_critical = ($relative -like "_next*" -or $file.Extension -eq ".css" -or $file.Extension -eq ".js")
    
    if ($is_critical) {
        $remote_uri = $ftp_root + $relative.Replace("\", "/")
        if ($file.PSIsContainer) {
            Create-Directory $remote_uri
        }
        else {
            Upload-File $file.FullName $remote_uri
        }
    }
}

# Pass 2: Upload remaining files (HTML, images, PDFs), excluding dataset
Write-Host "`n[Pass 2] Uploading Remaining Files (HTML, Images, PDFs)..." -ForegroundColor Cyan
foreach ($file in $all_files) {
    $relative = $file.FullName.Substring($local_path.Length + 1)
    
    # Skip what was already uploaded in Pass 1
    $was_critical = ($relative -like "_next*" -or $file.Extension -eq ".css" -or $file.Extension -eq ".js")
    if ($was_critical) { continue }

    # EXCLUSION RULE: Skip the dataset folder
    if ($relative -like "dataset*" -or $relative -eq "dataset") {
        continue
    }

    $remote_uri = $ftp_root + $relative.Replace("\", "/")

    if ($file.PSIsContainer) {
        Create-Directory $remote_uri
    }
    else {
        Upload-File $file.FullName $remote_uri
    }
}

# Pass 3: Upload Large Dataset Files (Only if enabled)
if (-not $skip_dataset_upload) {
    Write-Host "`n[Pass 3] Uploading Large Dataset Files..." -ForegroundColor Yellow
    foreach ($file in $all_files) {
        if ($file.PSIsContainer) { continue }
        
        $relative = $file.FullName.Substring($local_path.Length + 1)
        
        # Process ONLY the dataset folder
        if ($relative -like "dataset/*" -or $relative -like "dataset\*") {
            $remote_uri = $ftp_root + $relative.Replace("\", "/")
            Upload-File $file.FullName $remote_uri
        }
    }
}
else {
    Write-Host "`n[Pass 3] Skipping Large Dataset Files per configuration." -ForegroundColor Magenta
}

Write-Host "`nDeployment Complete!" -ForegroundColor Green
