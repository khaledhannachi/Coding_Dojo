from flask_app import DATABASE
from flask_app.config.mysqlconnection import connectToMySQL
from flask import Flask, render_template, redirect, request, session, flash
from flask_app.models.user_model import User


class Book:
    def __init__(self, data):
        self.id = data["id"]
        self.title = data["title"]
        self.author = data["author"]
        self.author = data["my_thoughts"]
        self.user_id = data["user_id"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    #! READ ALL
    @classmethod
    def read_all(cls):
        query = "SELECT * FROM books;"
        results = connectToMySQL(DATABASE).query_db(query)
        books = []
        for row in results:
            one_book = cls(row)
            books.append(one_book)

            # ! Route Guard

        return books
