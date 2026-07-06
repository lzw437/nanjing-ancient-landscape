$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$logDir = Join-Path $projectRoot "logs"
$logPath = Join-Path $logDir "server-watch.log"

New-Item -ItemType Directory -Force -Path $logDir | Out-Null
Set-Location $projectRoot

"[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] Starting Node server in watch mode..." | Out-File -FilePath $logPath -Encoding UTF8

node --watch --watch-path=server.js --watch-path=app.js server.js *> $logPath
