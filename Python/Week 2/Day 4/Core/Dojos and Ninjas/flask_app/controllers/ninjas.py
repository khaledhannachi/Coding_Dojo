from flask_app import app
from flask_app.models.ninja_model import Ninja
from flask_app.models.dojo_model import Dojo
from flask import redirect,render_template,request


@app.route("/ninjas/new")
def new():
    all_dojos=Dojo.get_all()
    return render_template('new_ninjas.html',all_dojos=all_dojos)




@app.route("/create" ,methods=['POST'])
def save_ninja():
    data={"first_name":request.form["first_name"],
        "last_name":request.form["last_name"],
        "age":request.form["age"],
        "dojo_id":request.form["dojo_id"]
        }
    Ninja.save(data)
    
    return redirect('/')