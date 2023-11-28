from flask_app.models.book_model import Book
from flask_app import app
from flask import Flask, render_template, redirect, request, session, flash


@app.route("/books")
def all_books():
    all_books = Book.read_all()
    return render_template("all_books.html", all_books=all_books)


@app.route("/books/new")
def books_form():
    return render_template("create_book.html")


@app.route("/books/<int:id>/edit")
def book_edit_form(id):
    return render_template("update_book.html")


@app.route("/books/<int:id>")
def view_one_book():
    return render_template("view_one.html")
