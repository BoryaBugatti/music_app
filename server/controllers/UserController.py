from flask import Blueprint
from flask import request
import bcrypt
from models.user_model import User
from main import db
from email_validator import validate_email, EmailNotValidError
user_bp = Blueprint('users', __name__)

@user_bp.route('/reg', methods=['POST'])
def Reg():
    data = request.get_json()
    if data['user_name'] == '' or data['user_email'] == '' or data['user_password'] == ' ':
        return "Fields cant be empty"
    try:
        validate_email(data['user_email'])
    except EmailNotValidError as e:
        return (str(e))
    if len(data['user_password']) < 8:
        return 'The lenght of password cant be less than 8 symbols'
    user_password = data['user_password'].encode('utf-8')
    hashed_password = (bcrypt.hashpw(user_password, bcrypt.gensalt())).decode('utf-8')
    new_user = User(user_name = data['user_name'], user_email = data['user_email'], user_password = hashed_password, user_role='Пользователь')
    db.session.add(new_user)
    db.session.commit()
    return "User Created"

@user_bp.route('/auth', methods=['POST'])
def Auth():
    data = request.get_json()
    

@user_bp.route('/users', methods=['GET'])
def GetUsers():
    user = User()
    users = user.query.all()
    users_data = []
    for u_ser in users:
        users_data.append({
            "user_id": u_ser.user_id,
            "user_name": u_ser.user_name,
            "user_email": u_ser.user_email
        })
    return users_data

@user_bp.route('/users/<int:id>', methods=['GET'])
def GetUserById(id):
    user = User()
    users = user.query.all()
    users_data = []
    for u_ser in users:
        users_data.append({
            "user_id": u_ser.user_id,
            "user_name": u_ser.user_name,
            "user_email": u_ser.user_email
        })
    user_with_id = 0
    for user_data in users_data:
        if user_data['user_id'] == id:
            return user_data