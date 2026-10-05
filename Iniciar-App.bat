@echo off
title Ingles Tecnico para Electricistas
cd /d "%~dp0"
set IP=
for /f %%i in ('powershell -NoProfile -Command "(Get-NetIPConfiguration | Where-Object {$_.IPv4DefaultGateway} | Select-Object -First 1).IPv4Address.IPAddress"') do set IP=%%i
echo.
echo  ==================================================
echo   INGLES TECNICO PARA ELECTRICISTAS
echo.
echo   En esta computadora:
echo      http://localhost:8351
echo.
if defined IP (
echo   En tu TELEFONO (misma red Wi-Fi de la casa):
echo      http://%IP%:8351
echo.
)
echo   Deja esta ventana abierta mientras estudias.
echo   Para salir: cierra esta ventana.
echo.
echo   Si Windows pregunta por el Firewall, elige
echo   "Permitir acceso" en redes privadas.
echo  ==================================================
echo.
start "" http://localhost:8351
python -m http.server 8351 --bind 0.0.0.0
