import express from "express";
import sillyname from "sillyname";

const app = express();
const port = 3000;

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/submit", (req, res) => {
    const name = sillyname();
    res.render("index.ejs", { name: name});
})
app.listen(port, () => {
    console.log("Running...");
})