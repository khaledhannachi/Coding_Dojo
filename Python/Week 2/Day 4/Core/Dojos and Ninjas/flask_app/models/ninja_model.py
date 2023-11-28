from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE 

class Ninja:
    def __init__(self,data):
        self.id=data["id"]
        self.first_name=data["first_name"]
        self.last_name=data["last_name"]
        self.age=data["age"]
        self.dojo_id=data["dojo_id"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]

    @classmethod
    def get_all(cls):
        query="select * from ninjas;"
        results=connectToMySQL(DATABASE).query_db(query)
        all_ninjas=[]
        for one_ninjas in results:
            all_ninjas.append(cls(one_ninjas))
        return all_ninjas
    @classmethod  
    def get_one(cls,data):
        query="select * from ninjas where id=%(id)s;"
        result=connectToMySQL(DATABASE).query_db(query,data)
        return cls(result[0])
        
    @classmethod
    def save(cls,data):
        query="""insert into ninjas (first_name,last_name,age,dojo_id) values(%(first_name)s,%(last_name)s,%(age)s,%(dojo_id)s);"""
        result=connectToMySQL(DATABASE).query_db(query,data)
        return result
