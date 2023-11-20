from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "your_secret_key"  # Change this to a secure secret key


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/result", methods=["POST"])
def process():
    session["name"] = request.form["name"]
    session["location"] = request.form["location"]
    session["favorite_language"] = request.form["favorite_language"]
    session["comments"] = request.form["comments"]
    return redirect("/result")


@app.route("/result")
def result():
    return render_template("result.html", session=session)


if __name__ == "__main__":
    app.run(debug=True)
