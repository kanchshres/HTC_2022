from model import User
from model import Item
# MongoDB driver
import motor.motor_asyncio
# mongodb://localhost:27017/
# mongodb+srv://Cluster05731:pr1i8b82CM4z0qZI@cluster05731.0zu5f2j.mongodb.net/test
client = motor.motor_asyncio.AsyncIOMotorClient('mongodb+srv://Cluster05731:pr1i8b82CM4z0qZI@cluster05731.0zu5f2j.mongodb.net/test')

# User DB
user_db = client.UserList
user_collection = user_db.user
async def fetch_one_user(username):
    document = await user_collection.find_one({"username":username})
    return document

async def fetch_all_users():
    users = []
    cursor = user_collection.find({})
    async for document in cursor:
        users.append(User(**document))
    return users

async def create_user(user):
    document = user
    result = await user_collection.insert_one(document)
    return document

async def update_user(username, email, password, home_address):
    await user_collection.update_one({"username": username}, {"$set": {
        "email":email}}, {"$set":{"password":password}}, {"$set":
        {"home_address":home_address}})
    document = await user_collection.find_one({"username":username})
    return document

async def remove_user(username):
    await user_collection.delete_one({"username":username})
    return True

# Items DB
item_db = client.ItemList
item_collection = item_db.item
async def fetch_one_item(title):
    document = await item_collection.find_one({"title":title})
    return document

async def fetch_all_items():
    items = []
    cursor = item_collection.find({})
    async for document in cursor:
        items.append(Item(**document))
    return items

async def create_item(title):
    document = title
    await item_collection.insert_one(document)
    return document

async def update_item(title, description, value, category):
    await item_collection.update_one({"title": title}, {"$set": 
    {"description":description}}, {"$set": {"value":value}},{"$set":
    {"category":category}} )
    document = await item_collection.find_one({"title":title})
    return document

async def remove_item(title):
    await item_collection.delete_one({"title":title})
    return True
