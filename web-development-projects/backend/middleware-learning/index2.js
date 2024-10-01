import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";   

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// custom middlware 
function logger(req, res, next) {
    console.log("Request Method", req.method);
    console.log("Request URL", req.url);
}

app.use(logger);

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