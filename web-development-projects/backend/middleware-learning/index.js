import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url"; 
import morgan from "morgan";   

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// body-parset middleware
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", (req, res) => {
    console.log(req.body.username);
    res.send(`Is ${req.body.username} your real username?`);
})




app.listen(port, () => {
    console.log("Running...");
})