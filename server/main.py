from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config
from flask import request
db = SQLAlchemy()
migrate = Migrate()
cors = CORS()


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    db.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app)
    return app

app = create_app()

@app.route('/reg', methods=['POST'])
def index():
    data = request.data
    return data['user_name']


if __name__ == "__main__":
    app.run(host='0.0.0.0', port='8080', use_reloader=1, debug=1)