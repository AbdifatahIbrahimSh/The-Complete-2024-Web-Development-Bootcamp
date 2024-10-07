import express from "express";
import bodyParser from "body-parser";
import axios, { AxiosHeaders } from "axios";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static("public"));


// 1. Get All the data from server using axios
app.get("/", async (req, res) => {
    try {
        const result = await axios.get("http://localhost:4000/posts");
        res.render("index.ejs", { posts: result.data});
    } catch(error) {
        console.error(error.message);
        res.send(error.message); 
    }
})

app.get("/add", (req, res) => {
    res.render("add.ejs");
})

// 2. Add new post 
app.post("/posts/add", async (req, res) => {
    try {
        const result = await axios.post("http://localhost:4000/posts/add", req.body, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        res.redirect("/");
    } catch(error) {
        res.send({ error: error.message});
    }
})

// 3. Get new post with an id 
app.post("/posts/edit", async (req, res) => {
    const id = parseInt(req.body.id);
    try {
        const result = await axios.get(`http://localhost:4000/posts/${id}`, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        res.render("edit.ejs", { post: result.data });
    } catch(error) {
        res.send({ error: error.message});
    }
})


// 4. update the whole post 
app.post("/posts/editpost", async (req, res) => {
    const id = parseInt(req.body.id);
    try {
        const result = await axios.put(`http://localhost:4000/posts/${id}/edit`, req.body, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        res.redirect("/");
    } catch(error) {
        res.send({ error: error.message});
    }
})

app.post("/posts/delete", async (req, res) => {
    const id = parseInt(req.body.id);
    try {
        const result = await axios.delete(`http://localhost:4000/posts/${id}/delete`, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        res.redirect("/");
    } catch(error) {
        res.send({ error: error.message});
    }
})
app.listen(port, () => {
    console.log(`Running on port ${port}`);
})