import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import pg from "pg";
import bcrypt from "bcrypt";


const app = express();
const port = 3000;


const db = new pg.Pool({
    user: "postgres", 
    host: "localhost", 
    database: "authentication", 
    password: "coofle coofle", 
    port: 5432
})



app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

app.use(session({ 
    secret: "My Secret", 
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());


passport.use(new Strategy( 
    { usernameField: "email"}, 
    async (email, password, done) => {
        const client = await db.connect();
        try {
            const userResult = await client.query("SELECT * FROM users WHERE email = $1", [email]);
            const user = userResult.rows[0];

            if (!user)
                return done(null, false, { message: "User not found"});

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) 
                return done(null, false, { message: "Incorrect password"});
            return done(null, user);
        } catch(error) {
            console.log(error);
        } finally {
            client.release();
        }
        
    }
))

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
    const client = await db.connect();
    try {
        const userResult = await client.query("SELECT * FROM users WHERE id = $1", [id]);
        const user = userResult.rows[0];
        done(null, user);
    } catch (error) {
        console.log(error);
    } finally {
        client.release();
    }
    
})

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/login", (req, res) => {
    res.render("login.ejs");
})

app.post("/login", passport.authenticate("local", {
    successRedirect: "/secrets", 
    failureRedirect: "/login"
}))

app.get("/secrets", (req, res) => {
    if (req.isAuthenticated()) 
        res.render("secrets.ejs");
    else 
        res.redirect("/login");
})

app.get("/logout", (req, res, next) => {
    req.logOut(err => {
        if (err) return next(err);
        else res.redirect("/login");
    })
})

app.get("/register", (req, res) => {
    res.render("register.ejs");
})

app.post("/register", async (req, res) => {
    const client = await db.connect();
    const { email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);


    try {
        const userExists = await client.query("SELECT * FROM users WHERE email = $1", [email]);
        if (userExists.rows.length > 0) 
            return res.send("User already exsits");

         
        await client.query("INSERT INTO users(email, password) VALUES ($1, $2)", [email, hash]);
        const newUserResult = await client.query("SELECT * FROM users WHERE email = $1", [email]);
        const newUser = newUserResult.rows[0];

        req.login(newUser, (err) => {
            if (err) return next(err);
            return res.redirect("/secrets");
        })
    } catch(error) {
        console.log(error);
    } finally {
        client.release();
    }
    
})


app.listen(port, () => {
    console.log(`Running on ${port} port.`);
})