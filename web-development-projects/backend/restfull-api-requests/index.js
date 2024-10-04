import axios from "axios";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {});
})

app.post("/get-secret", async (req, res) => {
    try {
        const token = "b74da17d-c3d7-4353-aaa2-8ef8feb60094";
        const searchId = req.body.id;
    const result = await axios.get(`https://secrets-api.appbrewery.com/secrets/${searchId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    res.render("index.ejs", { data: JSON.stringify(result.data)});
    } catch(error) {
        console.error("Failed to fetch data: " + error.message);
        res.render("index.ejs", { data: "That number is invalid we cannot access it"});
    }
})

// adding a new secret
app.post("/post-secret", async (req, res) => {
    try {
        const token = "b74da17d-c3d7-4353-aaa2-8ef8feb60094";
    const result = await axios.post(`https://secrets-api.appbrewery.com/secrets/`, req.body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    res.render("index.ejs", { data: JSON.stringify(result.data)});
    } catch(error) {
        console.error("Failed to fetch data: " + error.message);
        res.render("index.ejs", { data: "That number is invalid we cannot access it"});
    }
})

app.post("/put-secret", async (req, res) => {
    try {
        const token = "b74da17d-c3d7-4353-aaa2-8ef8feb60094";
    const result = await axios.put(`https://secrets-api.appbrewery.com/secrets/${req.body.id}`, req.body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    res.render("index.ejs", { data: JSON.stringify(result.data)});
    } catch(error) {
        console.error("Failed to fetch data: " + error.message);
        res.render("index.ejs", { data: "That number is invalid we cannot access it"});
    }
})

// deleting a secret
app.post("/delete-secret", async (req, res) => {
    try {
        const token = "b74da17d-c3d7-4353-aaa2-8ef8feb60094";
    const result = await axios.delete(`https://secrets-api.appbrewery.com/secrets/${req.body.id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    res.render("index.ejs", { data: JSON.stringify(result.data)});
    } catch(error) {
        console.error("Failed to fetch data: " + error.message);
        res.render("index.ejs", { data: "That number is invalid we cannot access it"});
    }
})

// partially updates the data 
app.post("/patch-secret", async (req, res) => {
    try {
        const token = "b74da17d-c3d7-4353-aaa2-8ef8feb60094";
    const result = await axios.patch(`https://secrets-api.appbrewery.com/secrets/${req.body.id}`, req.body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    res.render("index.ejs", { data: JSON.stringify(result.data)});
    } catch(error) {
        console.error("Failed to fetch data: " + error.message);
        res.render("index.ejs", { data: "That number is invalid we cannot access it"});
    }
})

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})