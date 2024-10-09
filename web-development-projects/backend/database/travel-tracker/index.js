import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true}));

let visitedCountries = [];
const db = new pg.Pool({
    user: "postgres",
    host: "localhost",
    database: "world_capitals",
    password: "coofle coofle", 
    port: 5432
})


async function loadVisitedCountries() {
    const client = await db.connect();
    client.query("SELECT country_code from visited_countries", (err, res) => {
        if (err)
            console.error("Error Executing..", err.stack);
        else 
            visitedCountries = res.rows;
    })
    client.release();
}

loadVisitedCountries();


app.get("/", (req, res) => {
    const countryCodes = [];
    visitedCountries.forEach(code => {
        countryCodes.push(code.country_code);
    })
    res.render("index.ejs", {countries: countryCodes, total: countryCodes.length});
})

app.post("/add", async (req, res) => {
    const client = await db.connect();
    const country = req.body.country;
    const result = await client.query("SELECT country_code FROM countries WHERE country_name = $1", [country]);

    if (result.rows.length !== 0) {
        const countryCode = result.rows[0].country_code;
        await client.query("INSERT INTO visited_countries(country_code) VALUES ($1)", [countryCode]);
    }
    
    client.release();
    await loadVisitedCountries();
    res.redirect("/");
    
})

app.listen(port, () => {
    console.log(`Running on ${port} port`);
})