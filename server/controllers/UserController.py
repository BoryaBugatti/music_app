from flask import Blueprint

user_bp = Blueprint('users', __name__)

@user_bp.route('/users')
def index():
    return "<h1>asdasdsada</h1>"