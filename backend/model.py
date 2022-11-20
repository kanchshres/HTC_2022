# Pydantic allows auto creation of JSON Schemas from models
from pydantic import BaseModel

class User(BaseModel):
    username: str
    email: str
    password: str

class Item(BaseModel):
    title: str
    description: str
    value: str
    category: str
    owner: str