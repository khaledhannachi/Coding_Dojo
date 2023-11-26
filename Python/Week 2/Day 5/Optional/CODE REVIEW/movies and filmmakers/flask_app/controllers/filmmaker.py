from flask_app import app
from flask import Flask, redirect, render_template, request
from ..models.filmmaker import FilmMaker
from ..models.movie import Movie


@app.route("/")
def index():
    all_makers = FilmMaker.get_all()
    return render_template("film.html", all_makers=all_makers)


@app.route("/create/maker", methods=["post"])
def create_maker():
    data = {"name": request.form["name"]}
    FilmMaker.save(data)
    return redirect("/")


@app.route("film/<int:id>")
def show_maker(id):
    data = {"id": id}
    movies = Movie.get_by_makerId(index)
    return render_template("show_maker.html", maker=maker, movies=movies)
