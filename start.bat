@ECHO off

start "Client" /d client npm start
start "Server" /d server venv\Scripts\python.exe server.py