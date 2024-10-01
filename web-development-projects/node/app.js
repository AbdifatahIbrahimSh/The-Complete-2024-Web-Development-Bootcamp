function sayHello(name) {
    console.log("Hello Mr." + name);
}

sayHello("Abdifatah");

// arrow function 



setTimeout(() => { 
    sayHello("Mohamed")
 }, 2000)

 // sets interval betw
 setInterval(() => {
    sayHello("Nour")
 }, 1000);