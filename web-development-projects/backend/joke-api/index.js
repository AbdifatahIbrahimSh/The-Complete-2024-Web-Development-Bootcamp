import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

const jokes = [
  {
    id: 1,
    jokeText:
      "Why don't scientists trust atoms? Because they make up everything!",
    jokeType: "Science",
  },
  {
    id: 2,
    jokeText: "Why did the chicken join a band? Because it had the drumsticks!",
    jokeType: "Animal",
  },
  {
    id: 3,
    jokeText: "Why don’t skeletons fight each other? They don’t have the guts.",
    jokeType: "Halloween",
  },
  {
    id: 4,
    jokeText: "What do you call fake spaghetti? An impasta!",
    jokeType: "Food",
  },
  {
    id: 5,
    jokeText:
      "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    jokeType: "Relationship",
  },
  {
    id: 6,
    jokeText: "What do you call cheese that isn't yours? Nacho cheese!",
    jokeType: "Food",
  },
  {
    id: 7,
    jokeText:
      "What did the grape do when he got stepped on? Nothing but let out a little wine!",
    jokeType: "Food",
  },
  {
    id: 8,
    jokeText: "Why was the math book sad? It had too many problems.",
    jokeType: "Math",
  },
  {
    id: 9,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "Relationship",
  },
  {
    id: 10,
    jokeText: "Why can't you give Elsa a balloon? Because she will let it go.",
    jokeType: "Movie",
  },
  {
    id: 11,
    jokeText: "Why don’t eggs tell jokes? They’d crack each other up.",
    jokeType: "Food",
  },
  {
    id: 12,
    jokeText:
      "I’m reading a book about anti-gravity. It’s impossible to put down!",
    jokeType: "Science",
  },
  {
    id: 13,
    jokeText:
      "Why don't skeletons play music in church? Because they don't have organs.",
    jokeType: "Halloween",
  },
  {
    id: 14,
    jokeText: "What’s orange and sounds like a parrot? A carrot!",
    jokeType: "Food",
  },
  {
    id: 15,
    jokeText:
      "Why can’t your nose be 12 inches long? Because then it would be a foot.",
    jokeType: "Body",
  },
  {
    id: 16,
    jokeText:
      "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    jokeType: "Math",
  },
  {
    id: 17,
    jokeText: "What did one plate say to another plate? Lunch is on me.",
    jokeType: "Food",
  },
  {
    id: 18,
    jokeText:
      "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    jokeType: "Sports",
  },
  {
    id: 19,
    jokeText: "What do you call a belt made out of watches? A waist of time!",
    jokeType: "Puns",
  },
  {
    id: 20,
    jokeText: "Why don’t vampires go to barbecues? They don’t like steaks.",
    jokeType: "Halloween",
  },
  {
    id: 21,
    jokeText:
      "Why don’t you ever see elephants hiding in trees? Because they’re so good at it.",
    jokeType: "Animal",
  },
  {
    id: 22,
    jokeText:
      "I would tell you a construction joke, but I’m still working on it.",
    jokeType: "Puns",
  },
  {
    id: 23,
    jokeText:
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
    jokeType: "Puns",
  },
  {
    id: 24,
    jokeText:
      "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
    jokeType: "Tech",
  },
  {
    id: 25,
    jokeText: "Why was the computer cold? It left its Windows open.",
    jokeType: "Tech",
  },
  {
    id: 26,
    jokeText: "Why don’t cows have any money? Because farmers milk them dry.",
    jokeType: "Animal",
  },
  {
    id: 27,
    jokeText: "Why are elevator jokes so good? They work on many levels.",
    jokeType: "Puns",
  },
  {
    id: 28,
    jokeText: "Why did the bicycle fall over? It was two-tired.",
    jokeType: "Puns",
  },
  {
    id: 29,
    jokeText:
      "Why do bananas never get lonely? Because they hang out in bunches.",
    jokeType: "Food",
  },
  {
    id: 30,
    jokeText: "What do you call a bear with no teeth? A gummy bear!",
    jokeType: "Animal",
  },
  {
    id: 31,
    jokeText: "Why did the coffee file a police report? It got mugged.",
    jokeType: "Food",
  },
  {
    id: 32,
    jokeText: "I used to play piano by ear, but now I use my hands.",
    jokeType: "Music",
  },
  {
    id: 33,
    jokeText: "Why don’t dinosaurs drive cars? Because they’re extinct.",
    jokeType: "Animal",
  },
  {
    id: 34,
    jokeText: "Why did the tomato turn red? Because it saw the salad dressing!",
    jokeType: "Food",
  },
  { id: 35, jokeText: "What’s brown and sticky? A stick.", jokeType: "Puns" },
  {
    id: 36,
    jokeText: "Why was the broom late? It swept in.",
    jokeType: "Puns",
  },
  {
    id: 37,
    jokeText:
      "Why don’t oysters share their pearls? Because they’re shellfish.",
    jokeType: "Animal",
  },
  {
    id: 38,
    jokeText: "Why don’t crabs donate to charity? Because they’re shellfish.",
    jokeType: "Animal",
  },
  {
    id: 39,
    jokeText:
      "Why was the big cat disqualified from the race? Because it was a cheetah.",
    jokeType: "Animal",
  },
  {
    id: 40,
    jokeText:
      "What do you call a snowman with a six-pack? An abdominal snowman.",
    jokeType: "Winter",
  },
  {
    id: 41,
    jokeText:
      "Why can’t you give a balloon to an octopus? Because it will let go of it too easily!",
    jokeType: "Animal",
  },
  {
    id: 42,
    jokeText:
      "Why don’t penguins like talking to strangers at parties? Because they find it ice-breaking!",
    jokeType: "Animal",
  },
  {
    id: 43,
    jokeText:
      "Why don’t ducks tell secrets? Because they might quack under pressure!",
    jokeType: "Animal",
  },
  {
    id: 44,
    jokeText:
      "What’s a skeleton’s least favorite room in a house? The living room.",
    jokeType: "Halloween",
  },
  {
    id: 45,
    jokeText:
      "Why don’t koalas count as bears? They don’t meet the koalafications.",
    jokeType: "Animal",
  },
  {
    id: 46,
    jokeText:
      "Why did the cat sit on the computer? To keep an eye on the mouse!",
    jokeType: "Animal",
  },
  {
    id: 47,
    jokeText: "Why don’t sharks eat clowns? They taste funny.",
    jokeType: "Animal",
  },
  {
    id: 48,
    jokeText: "Why do ghosts like elevators? It lifts their spirits.",
    jokeType: "Halloween",
  },
  {
    id: 49,
    jokeText:
      "Why don’t pirates shower before they walk the plank? Because they wash up on shore.",
    jokeType: "Puns",
  },
  {
    id: 50,
    jokeText:
      "Why don’t you ever see baby pigeons? Because they’re good at hide and seek.",
    jokeType: "Animal",
  },
];

/* GET ROUTES */
// 1. get random joke
app.get("/jokes/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.json(jokes[randomIndex]);
})

// 2. get specific joke
app.get("/jokes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const foundJoke = jokes.find(joke => joke.id === id);
    res.json(foundJoke);
})

// 3. get specific type of joke
app.get("/jokes", (req, res) => {
    const type = req.query.type;
    const foundJokes = jokes.filter(joke => joke.jokeType.toLowerCase() === type.toLowerCase());
    res.json(foundJokes);
})

/* POST ROUTE */ 
app.post("/jokes", (req, res) => {
    const joke = {
        id: jokes.length + 1,
        jokeText: req.body.jokeText,
        jokeType: req.body.jokeType
    }
    jokes.push(joke);

    res.json(jokes.slice(-1));
})

/* PUT ROUTE */ 
app.put("/jokes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const jokeText = req.body.jokeText;
    const jokeType = req.body.jokeType;
    
    const updatedJoke = jokes.find(joke => {
        if (joke.id === id) {
            joke.jokeText = jokeText;
            joke.jokeType = jokeType;
        }
        return joke;
    })

    res.json(updatedJoke);
})

/* PATCH ROUTE */ 
app.patch("/jokes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const existingJoke = jokes.find(joke => joke.id === id);
    const replacementJoke = {
        id: id, 
        jokeText: req.body.jokeText || existingJoke.jokeText,
        jokeType: req.body.jokeType || existingJoke.jokeType,
    }

    const existingIndex = jokes.findIndex(joke => joke.id === id);
    jokes[existingIndex] = replacementJoke;
    res.json(replacementJoke);
})

/* DELETE ROUTE */ 
app.delete("/jokes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const deletedJokeIndex = jokes.findIndex(joke => joke.id === id);

    if (deletedJokeIndex > -1) {
        const deletedJoke = jokes.splice(deletedJokeIndex, 1)
        res.status(200).json(deletedJoke);
    } else {
        console.error();
        res.status(404)
           .json({ error: `Joke with this ${id} id not found.`});
    }

})
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
