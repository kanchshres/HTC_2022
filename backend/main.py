from fastapi import FastAPI, HTTPException

from backend.model import User

from backend.database import (
    fetch_one_user,
    fetch_all_users,
    create_user,
    update_user,
    remove_user,
)

# an HTTP-specific exception class  to generate exception information

from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = [
    "http://localhost:3000",
]

# what is a middleware? 
# software that acts as a bridge between an operating system or database and applications, especially on a network.

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/api/user")
async def get_user():
    response = await fetch_all_users()
    return response

@app.get("/api/user/{username}", response_model=User)
async def get_user_by_username(username):
    response = await fetch_one_user(username)
    if response:
        return response
    raise HTTPException(404, f"There is no user with the username {username}")

@app.post("/api/user", response_model=User)
async def post_user(user: User):
    response = await create_user(user.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@app.put("/api/user/{username}/", response_model=User)
async def put_user(username: str, email: str, password: str, home_address: str):
    response = await update_user(username, email, password, home_address)
    if response:
        return response
    raise HTTPException(404, f"There is no user with the username {username}")

@app.delete("/api/user/{username}")
async def delete_user(username):
    response = await remove_user(username)
    if response:
        return "Successfully deleted user"
    raise HTTPException(404, f"There is no user with the username {username}")