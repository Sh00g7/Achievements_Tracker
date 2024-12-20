# To Activate virtual environment
# .\venv\Scripts\activate

# To start the server
# python .\server.py

# To stop the server
# crtl + c

# To Deactivate virtual environment
# deactivate


from flask import Flask, jsonify
from flask_cors import CORS
import os
import json

app = Flask(__name__)
CORS(app)


@app.route("/aa", methods=['GET'])
def getAchievements():
    os.system("Decrypt_Achievements.exe")
    f = open('aa.json')
    data = json.load(f)
    f.close()
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)