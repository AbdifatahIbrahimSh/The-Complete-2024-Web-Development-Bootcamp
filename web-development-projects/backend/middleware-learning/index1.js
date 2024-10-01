import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url"; 
import morgan from "morgan";   

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/public/index.html");
    next();
})

app.post("/submit", (req, res, next) => {
    console.log(req.body.username);
    res.send(`Is ${req.body.username} your real username?`);
    next();
})




app.listen(port, () => {
    console.log("Running...");
})