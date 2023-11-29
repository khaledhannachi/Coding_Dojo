from flask import Flask

DATABASE = "pokemon_schema"
app = Flask(__name__)
app.secret_key = "shhhhhh"
