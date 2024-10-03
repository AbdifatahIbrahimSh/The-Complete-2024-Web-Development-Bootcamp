import express from "express";
import bodyParser from "body-parser";  

const app = express();
const port = 3000;

const jsonData = '{"students":{"names":["Ahmed","Mohamed","Nour"],"addresses":["Xeroawr","Jigjiga yar","150-ka"],"grades":[100,90,80]},"teachers":{"names":["Abdiqani","Abdifatah","Abdirizak"],"addresses":["Xeroawr","Jigjiga yar","150-ka"],"grades":[800,500,400]}}';
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let data; 

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/post", (req, res) => {
    switch(req.body.type) {
        case "students": 
            data = JSON.parse(jsonData).students;
            break;
        case "teachers": 
            data = JSON.parse(jsonData).teachers;
            break;
    }

    res.render("index.ejs", { data });
})

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})