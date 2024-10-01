import express from "express";

// create a server 
const app = express();

// create the port 
const port = 3000;

// make requests;
app.get("/", (req, res) => {
    res.send("Hello World!");
})


// create port listening the requests 
app.listen(port, () => {
    console.log("Running...")
})
