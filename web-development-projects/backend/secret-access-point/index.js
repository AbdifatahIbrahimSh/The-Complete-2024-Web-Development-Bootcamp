import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { isMainThread } from "worker_threads";

const __dirname = dirname(fileURLToPath(import.meta.url));


// custom middlware 

const app = express();
const port = 3000;
var isAuthorized = false;


app.use(bodyParser.urlencoded({ extended: true}));

function checkPassword(req, res, next) {
    if (req.body.password === "ILoveProgramming")
        isAuthorized = true;
    else 
        isAuthorized = false;
    next();
}

app.use(checkPassword);

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res, next) =>{
    if (isAuthorized)
         res.sendFile(__dirname + "/public/secrets.html");
    else
         res.sendFile(__dirname + "/public/index.html");
})




app.listen(port, () => {
    console.log("Running...");
})