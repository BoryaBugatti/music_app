from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from main import db

class User(db.Model):
    __tablename__ = 'user'
    user_id = db.Column(db.Integer(), primary_key = True)
    user_name = db.Column(db.String(255), nullable=False)
    user_email = db.Column(db.String(255), nullable=False)
    user_password = db.Column(db.String(255), nullable=False)
    user_role = db.Column(db.String(255), nullable=False, default="Пользователь")
    