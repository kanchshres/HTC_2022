from backend.model import User
# MongoDB driver
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')

database = client.UserList
collection = database.user

async def fetch_one_user(username):
    document = await collection.find_one({"username":username})
    return document

async def fetch_all_users():
    users = []
    cursor = collection.find({})
    async for document in cursor:
        users.append(User(**document))
    return users

async def create_user(user):
    document = user
    result = await collection.insert_one(document)
    return result

# need to fix line 28
async def update_user(username, email, password, home_address):
    await collection.update_one({"username": username}, {"$set": {"email":email}})
    document = await collection.find_one({"username":username})
    return document

async def remove_user(username):
    await collection.delete_one({"username":username})
    return True
