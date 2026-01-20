@echo off
setlocal enabledelayedexpansion
set PATH=%PATH%;C:\Program Files\Git\cmd;C:\Program Files\nodejs

echo ============================================
echo           PUB2 - Push & Build & Run
echo ============================================
echo.

REM Step 1: Kill current running server
echo [Step 1] Stopping current server...
taskkill /F /IM node.exe >nul 2>&1
timeout /t 2 /nobreak

REM Step 2: Push to GitHub
echo [Step 2] Pushing latest changes to GitHub...
git push
if errorlevel 1 (
    echo Error pushing changes!
    pause
    exit /b 1
)
echo Push successful!
echo.

REM Step 3: Build project
echo [Step 3] Building project...
"C:\Program Files\nodejs\npm.cmd" run build
if errorlevel 1 (
    echo Error building project!
    pause
    exit /b 1
)
echo Build successful!
echo.

REM Step 4: Run dev server
echo [Step 4] Starting dev server on http://localhost:3000...
echo.
"C:\Program Files\nodejs\npm.cmd" run dev

pause
