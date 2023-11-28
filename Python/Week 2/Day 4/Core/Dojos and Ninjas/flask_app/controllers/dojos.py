from flask_app import app
from flask_app.models.dojo_model import Dojo


from flask import redirect,render_template,request

@app.route("/")
def index():
    dojos=Dojo.get_all()
    return render_template('index.html',dojos=dojos)


@app.route("/process" ,methods=['POST'])
def save():
    data={"name":request.form["name"]

    }
    Dojo.save(data)
    return redirect('/')

@app.route("/show/<int:id>")
def show(id):
    data={
        "id":id
    }
    dojo_ninjas=Dojo.get_all_in_dojo(data)
    
    return render_template('show_dojo.html',dojo_ninjas=dojo_ninjas)



