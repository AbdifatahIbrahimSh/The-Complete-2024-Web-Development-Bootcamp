const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
require("dotenv").config();
const session = require("express-session");
const bcrypt = require("bcrypt");
const pg = require("pg");


const app = express();
const port = 3000;


app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));

const db = new pg.Pool({
    user: "postgres", 
    host: "localhost", 
    database: "oauth", 
    password: process.env.DATABASE_PASSWORD,
    port: 5432
})

app.use(session({
    secret: "my Secret", 
    resave: false,
    saveUninitialized: false
}))



app.use(passport.initialize());
app.use(passport.session());

passport.use( 
    new GoogleStrategy( {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "/auth/google/secrets",
        scope: ["profile", "email"]
    }, 
    async (accessToken, refreshToken, profile, done) => { 
        const { id, displayName, emails} = profile;
        const client = await db.connect();
        try {
            const result = await client.query("SELECT * FROM users WHERE google_id = $1", [id]);
            const user = result.rows[0];
            if (!user) {
                await client.query("INSERT INTO users(google_id, email, display_name) VALUES($1, $2, $3)", [id, emails[0].value, displayName]);
            }
            return done(null, user);
                
        } catch(error) {
            return done(error);
        } finally {
            client.release();
        }
    })
)

passport.use(
    new LocalStrategy({usernameField: "email"}, async(email, password, done) => {
        const client = await db.connect();
        try {
            const result = await client.query("SELECT * FROM users WHERE email = $1", [email]);
            const user = result.rows[0];
            if (!user) 
                return done(null, false, { message: "User not found"});
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) 
                return done(null, false, { message: "Invalid password"});
            return done(null, user);
        } catch(error) {
            return done(error);
        } finally {
            client.release();
        }
    })
)

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser(async(id, done) => {
    const client = await db.connect();
    try {
        const result = await client.query("SELECT * FROM users WHERE id = $1", [id]);
        const user = result.rows[0];
        done(null, user);
    } catch(error) {
        done(error);
    } finally {
        client.release();
    } 
})

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.post("/login", passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login"
}))
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"]}));

app.get("/auth/google/secrets", passport.authenticate("google", { failureRedirect: "/"}), (req, res) => {
    res.render("secrets");
})

app.get("/secrets", (req, res) => {
    if (req.isAuthenticated()) 
        res.render("secrets");
    else
        res.redirect("/login");
})

app.get("/register", (req, res) => {
    res.render("register");
})

app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const client = await db.connect();
    try {
        const result = await client.query("SELECT * FROM users WHERE email = $1", [email]);
        const user = result.rows[0];

        if (!user) {
            await client.query("INSERT INTO users(email, password) VALUES ($1, $2)", [email, hash]);

            const result = await client.query("SELECT * FROM users WHERE email = $1", [email]);
            const user = result.rows[0];
            req.login(user, (err) => {
                if (err) next(err);
                return res.redirect("/secrets");
            })
        } else {
            res.send("User already exists");
        }
    } catch(error) {
        console.error(error);
    } finally {
        client.release();
    }
})

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})