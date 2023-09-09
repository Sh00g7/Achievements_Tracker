# Terraria Achievements Tracker

## Setup

### Client

Download [Node.js](https://nodejs.org/en/download)

`cd Terraria-Achievements-Tracker\client`

`npm install`

### Server

Download [.NET Installer](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)

`cd Terraria-Achievements-Tracker\server`

Add your Steam ID and path to achievements-steam.dat to the C# file

`dotnet build`

Download [Python](https://www.python.org/downloads/)

Add Python to your PATH variables

Control Panel > Systems and Security > System > Advanced system settings > Environment Variables...

Add a new user variable

Variable name: Path

Variable value: C:\Users\user\AppData\Local\Programs\Python\Python311\Scripts\

*Replace user with your username

Create a virtual environment

`pip install virtualenv`

`python -m venv venv`

`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` (Allows you to run scripts for the next command)

`.\venv\Scripts\activate`

`pip install -r requirements.txt`

## Run

### Client
`npm start`

### Server
`python server.py`

## Exit

### Client and Server
`ctrl + c`


## OBS

Add browser source

- URL: `http://localhost:4200/`

- Width: `1000`

- Height: `1200`

Crop the view to not show the buttons

Right click the source and select `Interact` to see the full view and be able to press the buttons