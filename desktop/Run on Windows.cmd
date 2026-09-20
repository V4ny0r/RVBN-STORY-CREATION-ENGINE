@echo off
title Ravenbane Architect
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo   Node.js is needed once, to run the desktop shell. Opening the download page...
  echo   Install the LTS version, then double-click this file again.
  echo.
  start https://nodejs.org/
  pause
  exit /b 1
)
if not exist node_modules (
  echo   First run: fetching the desktop shell. This takes a minute and only happens once.
  call npm install --no-audit --no-fund
  if errorlevel 1 ( echo   Something went wrong installing. Check your connection and try again. & pause & exit /b 1 )
)
call npm start
