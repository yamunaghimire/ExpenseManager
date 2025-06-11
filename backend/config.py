from dotenv import load_dotenv
import os
from datetime import timedelta


load_dotenv()


class ApplicationConfig:
    SECRET_KEY = os.environ["SECRET_KEY"]
    JWT_SECRET_KEY = os.environ.get("JWT_SECRET_KEY")
    SQLALCHEMY_TRACK_MODIFICATIONS= False
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_DATABASE_URI = r"sqlite:///.db.sqlite"
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(weeks=1)   
    


