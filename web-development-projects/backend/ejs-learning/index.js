import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", (req, res) => {
    const today = new Date("Oct 03 2024");
    const day = today.getDay();

    let type = "weekday";
    let advice = "Its time to work hard";

    if (day === 4  || day === 5) {
        type = "weekend";
        advice = "Its time to have fun"
    }

    res.render("index.ejs", {
        name: req.body.name, 
        type: type, 
        advice: advice 
    });
})

const fruits = ["Apple", "Mango", "Strewberry"];

app.get("/fruits", (req, res) => {
    res.render("fruits.ejs", {
        fruits: fruits
    })
})

app.get("/test", (req, res) => {
    const data = {
        title: "EJS Tags", 
        seconds: new Date().getSeconds(),
        items: ["Apple", "Banana", "Cherry"],
        htmlContent: "<em> This is em text </em"
    }
    res.render("test.ejs", data);
})

app.get("/checkletters", (req, res) => {
    res.render("checkletters.ejs")
})

app.post("/checkletters", (req, res) => {
    const data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    }
    res.render("checkletters.ejs", data);
})

app.listen(port, () => {
    console.log(`Running on ${port} port`);
})