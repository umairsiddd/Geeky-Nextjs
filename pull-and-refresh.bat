@echo off
setlocal enabledelayedexpansion
set PATH=%PATH%;C:\Program Files\Git\cmd;C:\Program Files\nodejs

echo Pulling latest changes from GitHub...
git pull

if errorlevel 1 (
    echo Error pulling changes!
    pause
    exit /b 1
)

echo.
echo Changes pulled successfully!
echo Your browser should auto-refresh in a few seconds...
echo.
pause
