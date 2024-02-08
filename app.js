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


app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});