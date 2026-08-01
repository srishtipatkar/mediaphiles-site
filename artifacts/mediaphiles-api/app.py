from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import instaloader
import traceback
import re

app = FastAPI()

class InstagramRequest(BaseModel):
    profile_url: str

def extract_username(url: str):
    match = re.search(r"instagram\.com/([^/?]+)", url)
    if match:
        return match.group(1)
    return url

@app.post("/instagram/audit")
def instagram_audit(request: InstagramRequest):
    try:
        username = extract_username(request.profile_url)

        L = instaloader.Instaloader()

        profile = instaloader.Profile.from_username(
            L.context,
            username
        )

        return {
            "success": True,
            "username": profile.username,
            "followers": profile.followers,
            "posts": profile.mediacount,
            "bio": profile.biography,
        }

    except Exception as e:
        traceback.print_exc()

        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "error": str(e),
                "type": type(e).__name__
            }
        )