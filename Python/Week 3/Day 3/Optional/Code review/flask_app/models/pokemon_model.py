from flask_app import DATABASE
from flask_app.config.mysqlconnection import connectToMySQL
from flask import Flask, render_template, redirect, request, session, flash
from flask_app.models import user_model


class Recipe:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.time = data["time"]
        self.description = data["description"]
        self.instructions = data["instructions"]
        self.date_made = data["date_made"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.creator = None

    #! READ ALL

    @classmethod
    def read_all(cls):
        query = """
            SELECT * FROM recipes
            JOIN users
            ON users.id = recipes.user_id;
            """
        results = connectToMySQL(DATABASE).query_db(query)

        recipes = []
        for row in results:
            one_recipe = cls(row)
            fixed_user = {
                "id": row["users.id"],
                "first_name": row["first_name"],
                "last_name": row["last_name"],
                "email": row["email"],
                "password": row["password"],
                "created_at": row["users.created_at"],
                "updated_at": row["users.updated_at"],
            }

            one_recipe.creator = user_model.User(fixed_user)
            recipes.append(one_recipe)

        return recipes

    @classmethod
    def save(cls, data):
        query = """INSERT INTO recipes (name,time,description,instructions,date_made,user_id)
                values (%(name)s,%(time)s,%(description)s,%(instructions)s,%(date_made)s,%(user_id)s );
            """
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_recipe_by_user(cls, data):
        query = """
            SELECT * FROM recipes
            JOIN users
            ON users.id = recipes.user_id
            where books.id = %(id)s;
            """
        results = connectToMySQL(DATABASE).query_db(query, data)
        one_book = cls(results[0])
        fixed_user = {
            "id": results[0]["users.id"],
            "name": results[0]["name"],
            "email": results[0]["email"],
            "password": results[0]["password"],
            "created_at": results[0]["users.created_at"],
            "updated_at": results[0]["users.updated_at"],
        }
        one_book.creator = user_model.User(fixed_user)
        return one_book

    # @classmethod
    # def edit(cls, data):
    #     query = """
    #             update books
    #             set title = %(title)s, author = %(author)s, my_thoughts=%(my_thoughts)s, user_id=%(user_id)s
    #             where id=%(id)s;
    #         """
    #     results = connectToMySQL(DATABASE).query_db(query, data)
    #     return results

    # @classmethod
    # def delete(cls, data):
    #     query = """
    #             delete from books
    #             where id=%(id)s;
    #     """
    #     results = connectToMySQL(DATABASE).query_db(query, data)
    #     return results

    # @staticmethod
    # def validate(data):
    #     is_valid = True

    #     if len(data["title"]) < 2:
    #         is_valid = False
    #         flash("title must not be blank")
    #     if len(data["author"]) < 2:
    #         is_valid = False
    #         flash("Author must not be blank")

    #     if len(data["my_thoughts"]) < 2:
    #         is_valid = False
    #         flash("my_thoughts must not be blank")

    #     return is_valid
