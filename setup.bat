@ECHO

cd client
call npm install

cd ..\server
pip install virtualenv
python -m venv venv
venv\Scripts\pip.exe install -r requirements.txt

echo Achievements Tracker Setup Successfully Completed
pause