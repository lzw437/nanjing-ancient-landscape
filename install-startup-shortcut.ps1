$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$startScript = Join-Path $projectRoot "start-server-watch.ps1"
$startupDir = [Environment]::GetFolderPath("Startup")
$launcherPath = Join-Path $startupDir "NanjingLandscapeNodeServer.vbs"
$command = "powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File ""$startScript"""
$content = @"
Set shell = CreateObject("WScript.Shell")
shell.Run "$command", 0, False
"@

Set-Content -LiteralPath $launcherPath -Value $content -Encoding ASCII

Write-Host "Installed startup launcher: $launcherPath"
Write-Host "Start script: $startScript"
