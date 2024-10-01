import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let info = "";

// body-parser
app.use(bodyParser.urlencoded({extended: true}));

// custom middleware 
function fullInfo(req, res, next) {
    info  = `Your Username is: ${req.body.username} and your password is: ${req.body.password}`;
    next();
}
app.use(fullInfo);

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", (req, res, next) => {
    res.send(`<h1> Your Data </h1><h2>${info}</h2>`)
})

app.listen(port, () => {
    console.log("Running...");
})