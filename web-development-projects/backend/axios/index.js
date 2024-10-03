import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://official-joke-api.appspot.com/jokes/ten")
        res.render("index.ejs", { jokes: response.data});
    } catch(error) {
        console.error("Failed to make request", error.message);
        res.render("index.ejs", { error: error.message})
    }
})



app.listen(port, () => {
    console.log("Running on " + port + " port");
})