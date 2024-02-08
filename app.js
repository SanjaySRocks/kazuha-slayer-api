const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// for parsing application/json
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


// Main Code
app.get("/", (req, res) => {
	res.status(200).json({ message: "Welcome to Kazuha Slayer API", version: "0.1" });
})


app.get("/instagram", async (req, res) => {
    const instaData = await getInstagramProfileInfo();
	res.status(200).json({ data:  instaData });
})



async function getInstagramProfileInfo() {
    const myHeaders = new Headers();
    myHeaders.append(
        "user-agent",
        "Instagram 76.0.0.15.395 Android (24/7.0; 640dpi; 1440x2560; samsung; SM-G930F; herolte; samsungexynos8890; en_US; 138226743)"
    );
    myHeaders.append("Cookie", "csrftoken=HSuwypimSI859k2ADoQdXZFzRADzrqdu; mid=ZcTbPAABAAECGbgE6AT7MJG6kx8I");
    myHeaders.append("Origin", "http://www.instagram.com");
    myHeaders.append("Referer", "https://www.instagram.com/");


    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    try {
        const response = await fetch(`https://i.instagram.com/api/v1/users/web_profile_info/?username=kazuha__slayer`, requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}


app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});