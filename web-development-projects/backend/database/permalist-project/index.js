import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

let items = [];

const db = new pg.Pool({ 
    user: "postgres", 
    host: "localhost", 
    database: "permalist", 
    password: "coofle coofle", 
    port: 5432
})

// get all items
app.get("/", async(req, res) => {
    const client = await db.connect();
    try {
        const result = await client.query("SELECT * FROM items ORDER BY id ASC");
        items = result.rows;
        res.render("index.ejs", { items: items});
    } catch(error) {
        console.error(error);
    } finally {
        client.release();
    }
        
})

// add new item
app.post("/add", async (req, res) => {
    const title = req.body.title;
    const client = await db.connect();
    try {
        await client.query("INSERT INTO items(title) VALUES($1)", [title]);
        res.redirect("/");
    } catch(error) {
        console.error(error);
    }
    finally {
        client.release();
    }
})

app.post("/delete", async(req, res) => {
    const id = await req.body.deletedItem;
    const client = await db.connect();
    try {
        await client.query("DELETE FROM items WHERE id = $1", [id]);
        res.redirect("/");
    } catch(error) {
        console.error(error);
    } finally {
        client.release();
    }
})

// editing a texbox 
app.post("/edit", async (req, res) => {
    const newTitle = req.body.editingTitle;
    const id = parseInt(req.body.hiddenId);
    const client = await db.connect();
    try {
        await client.query("UPDATE items SET title = $1 WHERE id = $2", [newTitle, id])
        res.redirect("/");
    } catch(err) {
        console.error(err);
    } finally {
        client.release();
    }
})

app.listen(port, (req, res) => {
    console.log(`Running on ${port} port`);
})