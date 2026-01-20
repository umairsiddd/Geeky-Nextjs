@echo off
setlocal enabledelayedexpansion
set PATH=%PATH%;C:\Program Files\Git\cmd;C:\Program Files\nodejs

echo ============================================
echo           PUBLISH - Deploy Latest Code
echo ============================================
echo.

REM Step 1: Kill current running server
echo [Step 1] Stopping current server...
taskkill /F /IM node.exe >nul 2>&1
timeout /t 2 /nobreak

REM Step 2: Pull from git
echo [Step 2] Pulling latest code from GitHub...
git pull
if errorlevel 1 (
    echo Error pulling changes!
    pause
    exit /b 1
)
echo Pull successful!
echo.

REM Step 3: Run npm dev
echo [Step 3] Starting dev server on http://localhost:3000...
echo.
"C:\Program Files\nodejs\npm.cmd" run dev

pause
