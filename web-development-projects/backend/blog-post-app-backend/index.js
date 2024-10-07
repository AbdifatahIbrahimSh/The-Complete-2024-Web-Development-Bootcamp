import axios from "axios";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true}));

const posts = [
    {
      id: 1,
      title: "Understanding JavaScript Closures",
      content: "Closures are functions that have access to their outer function scope, even after the outer function has closed. In JavaScript, closures allow for data encapsulation and are widely used in functional programming. They are created whenever a function is declared, as they carry references to the variables from their scope.",
      date: "2024-10-06",
      author: "Jane Doe"
    },
    {
      id: 2,
      title: "Introduction to Asynchronous JavaScript",
      content: "Asynchronous JavaScript allows tasks to be performed without blocking the main thread. With callbacks, promises, and async/await, JavaScript can handle operations like fetching data over the network efficiently. Understanding how to work with asynchronous code is essential for building responsive applications.",
      date: "2024-10-06",
      author: "John Smith"
    },
    {
      id: 3,
      title: "Mastering ES6 Features",
      content: "ES6 introduced a variety of new features to JavaScript, including let/const, arrow functions, template literals, and more. These features make JavaScript more powerful and easier to write. Understanding these features is crucial for modern JavaScript development. ES6 has transformed JavaScript and made it more expressive.",
      date: "2024-10-06",
      author: "Alice Brown"
    },
    {
      id: 4,
      title: "Exploring JavaScript Array Methods",
      content: "JavaScript arrays come with various built-in methods like map, filter, and reduce. These methods help in manipulating data efficiently and are essential for functional programming in JavaScript. Knowing how to use these methods can simplify your code significantly. Each method serves a specific purpose and is versatile.",
      date: "2024-10-06",
      author: "Tom White"
    },
    {
      id: 5,
      title: "Understanding the DOM in JavaScript",
      content: "The Document Object Model (DOM) is a representation of an HTML document as a tree structure. JavaScript can manipulate the DOM to dynamically change the content and appearance of a web page. Understanding DOM manipulation is essential for interactive web development. Using JavaScript, we can access and modify elements directly.",
      date: "2024-10-06",
      author: "Emma Green"
    },
    {
      id: 6,
      title: "Event Handling in JavaScript",
      content: "Events are actions that happen in the browser, like clicks or key presses. JavaScript can handle these events using event listeners, making web pages interactive. Understanding how to manage events is critical for building user-friendly applications. By using different event listeners, developers can control user interactions.",
      date: "2024-10-06",
      author: "Liam Johnson"
    },
    {
      id: 7,
      title: "Promises in JavaScript",
      content: "Promises represent the eventual completion or failure of asynchronous operations. They allow us to handle asynchronous tasks more effectively. Understanding promises is key for writing clean asynchronous code. Promises can be chained and provide better error handling compared to callbacks.",
      date: "2024-10-06",
      author: "Olivia Davis"
    },
    {
      id: 8,
      title: "Async/Await in JavaScript",
      content: "Async/await is built on top of promises and provides a more readable way to handle asynchronous code. It allows us to write asynchronous code that looks synchronous. Mastering async/await is crucial for modern JavaScript development. By using async functions, we can handle async tasks with cleaner syntax.",
      date: "2024-10-06",
      author: "Noah Wilson"
    },
    {
      id: 9,
      title: "Introduction to JavaScript Fetch API",
      content: "The Fetch API is a modern way to make HTTP requests in JavaScript. It is promise-based and easier to use than older methods like XMLHttpRequest. Understanding the Fetch API is essential for working with APIs in JavaScript. With fetch, we can retrieve data from servers efficiently.",
      date: "2024-10-06",
      author: "Sophia Martinez"
    },
    {
      id: 10,
      title: "Error Handling in JavaScript",
      content: "Error handling is crucial for making robust JavaScript applications. JavaScript provides try, catch, and finally for error handling. Understanding error handling patterns helps build applications that handle unexpected issues gracefully. Proper error handling also improves the user experience.",
      date: "2024-10-06",
      author: "Mason Taylor"
    }
];
  

// 1. get all posts
app.get("/posts", (req, res) => {
    res.json(posts);
})

// 2. get post with specific id
app.get("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const foundIndex = posts.findIndex(post => post.id === id);
    if (foundIndex > -1) {
        res.json(posts[foundIndex]);
    } else {
        res.json({ error: `This post with this ${id} id does not exit`});
    }
})

// 3.Post post
app.post("/posts/add", (req, res) => {
    const date = new Date();
    const newPost = {
        id: posts.length + 1,
        title: req.body.title, 
        content: req.body.content,
        date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        author: req.body.author
    }
    posts.push(newPost);
    res.json(posts);
})

// 4. Edit Post 
app.put("/posts/:id/edit", (req, res) => {
    const date = new Date();
    const id = parseInt(req.params.id);
    const EditingPostIndex = posts.findIndex(post => post.id === id);
    const editedPost = {
        id: id,
        title: req.body.title, 
        content: req.body.content,
        date: req.body.date,
        author: req.body.author
    }
    posts[EditingPostIndex] = editedPost;
    res.status(200).json(posts[EditingPostIndex]);
})

// 5. Patch Post 
app.patch("/posts/:id/patch", (req, res) => {
    const date = new Date();
    const id = parseInt(req.params.id);
    const editingPost = posts.find(post => post.id === id);
    const editingPostIndex = posts.findIndex(post => post.id === id);
    const editedPost = {
        id: id,
        title: req.body.title || editingPost.title, 
        content: req.body.content || editingPost.content,
        date: req.body.date || editingPost.date,
        author: req.body.author || editingPost.author
    }
    posts[editingPostIndex] = editedPost;
    res.status(200).json(posts[editingPostIndex]);
})

// 6. Delete Post
app.delete("/posts/:id/delete", (req, res) => {
    const id = parseInt(req.params.id);
    const deletingPostIndex = posts.findIndex(post => post.id === id);
    if (deletingPostIndex > -1) {
        posts.splice(deletingPostIndex, 1);
        res.sendStatus(200);
    } else {
        res.status(404).json({ error: `Post with this ${id} id not found.`});
    }
})

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})