from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from server.main import db

class User(db.Model):
    user_id = db.column(db.Integer)