from flask import Flask, render_template, session, redirect, request

app = Flask(__name__)
app.secret_key = "your_secret_key"


@app.route("/")
def main():
    if session["counter"]:
        session["counter"] += 1
    return render_template("index.html", counter=session["counter"])


@app.route("/destroy_session ")
def destroy_session():
    session.clear()
    return redirect("/")


@app.route("/")
def reset():
    # Reset the counter to 0
    session["counter"] = 0
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
