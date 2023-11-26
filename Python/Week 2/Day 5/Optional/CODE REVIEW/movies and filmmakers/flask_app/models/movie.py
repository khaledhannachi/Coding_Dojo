from ..config.mysqlconnection import connectToMySQL
from flask_app import db


class Movie:
    def __init__(self, data):
        self.id = data["id"]
        self.title = data["title"]
        self.year = data["year"]
        self.film_maker_id = data["film_maker_id"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    # create
    @classmethod
    def save(cls, data):
        query = """
                insert into movies (%(id)s,%(title)s, %(year)s,%(film_maker_id)s);
    """
        return connectToMySQL(db).query_db(query, data)

    # Read
    @classmethod
    def get_all(cls):
        query = """
        select * from movies;
        """
        result = connectToMySQL(db).query_db(query)
        movies = []
        for row in result:
            movies.append(cls(row))

        return movies

    @classmethod
    def get_by_makerId(cls, data):
        query = """"
                select * from movies where film_maker_id=%(id)s;
                """
        results = connectToMySQL(db).query_db(query, data)
        movies = []
        for row in results:
            movies.append(cls(row))

        return movies

    @classmethod
    def get_movie_by_id(cls, data):
        query = """"
        select * from movies where id=%(id)s;
        """
        results = connectToMySQL(db).query_db(query, data)
        return cls(results[0])

    @classmethod
    def update(cls, data):
        query = """"
        UPDATE movies set title= (%(id)s,%(title)s, %(year)s,%(film_maker_id)s);
        """
        return connectToMySQL(db).query_db(query, data)
