import axios from "axios";
import express from "express";


const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { });
})

app.get("/no-auth", async (req, res) => {
    try {
        const result = await axios.get("https://bored-api.appbrewery.com/random");
        const data = JSON.stringify(result.data);
        res.render("index.ejs", { content: data});
    } catch(error) {
        console.error("Failed to fetch data: ", error.message);
        res.send(error.message);
    }
})

app.get("/basic-auth", async (req, res) => {
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/all?page=1", {
            auth: {
                username: "coofle", 
                password: "ILOVECOOFLE123"
            }
        });
        const data = JSON.stringify(result.data);
        res.render("index.ejs", { content: data});
    } catch(error) {
        console.error("Failed to fetch data: ", error.message);
        res.send(error.message);
    }
})

app.get("/api-auth", async (req, res) => {
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/filter", {
            params: {
                score: 5, 
                apiKey: "448d19bb-d95b-4741-a4e8-f61cda6db37b"
            }
        });
        const data = JSON.stringify(result.data);
        res.render("index.ejs", { content: data});
    } catch(error) {
        console.error("Failed to fetch data: ", error.message);
        res.send(error.message);
    }
})

app.get("/token-auth", async (req, res) => {
    try {
        const token = "0f5905d4-1b11-45f7-ba3f-4ab2652e4a4a"
        const result = await axios.get("https://secrets-api.appbrewery.com/secrets/1", {
            headers: {
               Authorization: `Bearer ${token}`
            }
        });
        const data = JSON.stringify(result.data);
        res.render("index.ejs", { content: data});
    } catch(error) {
        console.error("Failed to fetch data: ", error.message);
        res.send(error.message);
    }
})

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})