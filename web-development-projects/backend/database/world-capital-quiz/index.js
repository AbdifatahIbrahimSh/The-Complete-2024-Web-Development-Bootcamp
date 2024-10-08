import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

let totalScore = 0;

app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));


let quiz = [
    {country: "France", capital: "Paris"},
    {country: "United Kingdom", capital: "London"},
    {country: "United States", capital: "Washignton"},
    {country: "Somaliland", capital: "Hargeisa"}
]

const db = new pg.Client({
    user: "postgres", 
    host: "localhost", 
    database: "world_capitals", 
    password: "coofle coofle", 
    port: 5432
})
db.connect();

db.query("SELECT * FROM capitals", (err, res) => {
    if(err)
        console.error("Error Executing query", err.stack)
    else 
        quiz = res.rows;

    db.end();
})

let currentQuestion = {};

app.get("/", (req, res) => {
    totalScore = 0;
    nextQuestion();
    res.render("index.ejs", {question: currentQuestion});
})

app.post("/submit", (req, res) => {
    if (currentQuestion.capital.toLowerCase() === req.body.capitalName.toLowerCase().trim()) {
        totalScore++;
        console.log(totalScore);
    }
    nextQuestion();
    res.render("index.ejs", {question: currentQuestion, totalScore: totalScore});
})

function nextQuestion() {
    const randomCountryIndex = Math.floor(Math.random() * quiz.length);
    currentQuestion = quiz[randomCountryIndex];
}

app.listen(port, (req, res) => {
    console.log(`Running on port ${port}`);
})