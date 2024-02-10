import requests
import json

from fastapi import FastAPI, Query

# Create an instance of the FastAPI class
app = FastAPI()

# Define a GET route
@app.get("/")
def read_hello():
    return {'message': 'Kazuha Slayer API', 'version': '0.1'}

@app.get("/instagram")
def read_root():
    instaData = getInstagramDetails()

    return {"data": instaData}



def getInstagramDetails():
    url = "https://i.instagram.com/api/v1/users/web_profile_info/?username=kazuha__slayer"

    payload = {}
    headers = {
    # 'user-agent': 'Instagram 76.0.0.15.395 Android (24/7.0; 640dpi; 1440x2560; samsung; SM-G930F; herolte; samsungexynos8890; en_US; 138226743)',
    'user-agent': 'Instagram 76.0.0.15.395 Android (24/7.0; 640dpi; 1440x2560; samsung; SM-G930F; herolte; samsungexynos8890; en_US; 138226323)',
    # 'Cookie': 'csrftoken=HSuwypimSI859k2ADoQdXZFzRADzrqdu; ds_user_id=2519716256; mid=ZcTbPAABAAECGbgE6AT7MJG6kx8I'
    }

    proxies = {
        'http': 'http://117.250.3.58:8080',
    }
    response = requests.request("GET", url, headers=headers, data=payload, proxies=proxies)

    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error: Received status code {response.status_code} from Instagram API.")
        return {}
    