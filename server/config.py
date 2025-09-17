import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    DB_USER = 'boris'
    DB_PASSWORD = '031204'
    DB_HOST = 'localhost'
    DB_PORT = '5432'
    DB_NAME = 'mydb'
    SQLALCHEMY_DATABASE_URI = f'postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}'
    SQLALCHEMY_TRACK_MODIFICATIONS = False