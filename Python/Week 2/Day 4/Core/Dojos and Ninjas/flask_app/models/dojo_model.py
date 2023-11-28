from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import ninja_model
from flask_app import DATABASE
from pprint import pprint
class Dojo:
    def __init__(self,data) :
        self.id=data["id"]
        self.name=data["name"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]


    @classmethod
    def get_all(cls):
        query="select * from dojos;"
        results=connectToMySQL(DATABASE).query_db(query)
        all_dojos=[]
        for one_dojo in results:
            all_dojos.append(cls(one_dojo))
        return all_dojos
        
    def get_one(cls,data):
        query="select * from dojos where id=%(id)s;"
        result=connectToMySQL(DATABASE).query_db(query,data)
        return cls(result[0])
        
    @classmethod
    def save(cls,data):
        query="""insert into dojos (name) values(%(name)s);"""
        result=connectToMySQL(DATABASE).query_db(query,data)
        return result

    @classmethod
    def get_all_in_dojo(cls,data):
        query="""select * from dojos
                join ninjas
                on ninjas.dojo_id=dojos.id
                where dojos.id=%(id)s;
                """
        results=connectToMySQL(DATABASE).query_db(query,data)
        print(results)
        this_dojo=Dojo(results[0])
        pprint(this_dojo)
        ninjas=[]
        for row in results:
            ninja_dict={
                "id":row["ninjas.id"],
                "first_name":row["first_name"],
                "last_name":row["last_name"],
                "age":row["age"],
                "dojo_id":row["dojo_id"],
                "created_at":row["ninjas.created_at"],
                "updated_at":row["ninjas.updated_at"]
            }

            ninjas.append(ninja_model.Ninja(ninja_dict))
        this_dojo.all_ninjas=ninjas
        return this_dojo