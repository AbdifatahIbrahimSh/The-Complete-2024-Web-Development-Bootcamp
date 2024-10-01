/* Javascript Review 
    Object Oriented Programming (OOP)
    1. Objects 
    Sept 24, 2024
*/

function User(userName, age) {
    // private members 
    userName;
    age;
    this.isActive = false;
    
    // Getters and Setters
    Object.defineProperty(this, "userName", {
        get: function() {
            return userName;
        },
        set: function(value) {
            userName = value;
        }
    })
    this.great = function() {
        return "Hi " + userName;
    }
}

const user1 = new User("Ahmed", 12);

// Enumerating only properties 
for (let key in user1) {
    if (typeof user1[key] !== "function") 
        key + " " + user1[key];
}

/* Exercises */
// 1. Stopwatch object 
function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this, "running", {
        get: function() {
            return running;
        },
        set: function(value) {
            running = value;
        }
    })

    Object.defineProperty(this, "duration", {
        get: function() {
            return duration;
        }, 
        set: function(value) {
            duration = value;
        }
    })
    Object.defineProperty(this, "startTime", {
        get: function() {
            return startTime;
        }, 
        set: function(value) {
            startTime = value;
        }
    })

    Object.defineProperty(this, "endTime", {
        get: function() {
            return endTime;
        }, 
        set: function(value) {
            endTime = value;
        }
    })

}


Stopwatch.prototype.start = function() {
    if (this.running)
        throw Error("The stopwatch is already started");
    this.running = true;
    this.startTime = new Date();
}

Stopwatch.prototype.stop = function() {
    if (!this.running)
        throw Error("The stopwatch is already stopped");
    this.running = false;
    this.endTime = new Date();

    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
}

Stopwatch.prototype.reset = function() {
    this.startTime = null;
    this.endTime = null,
    this.running = false;
    this.duration = 0;
}


/* Javascript Review 
    Object Oriented Programming (OOP)
    2. Prototypes 
    Sept 25, 2024
*/

function Circle(radius = 1) {
    this.radius = radius;

    // 2. Accessor Properties 
    Object.defineProperty(this, "radius", {
        // changing those data properties
        enumerable: true, 
        configurable: false,
    
        get: function() {
            return radius;
        },
    
        set: function(value) {
            if (value > 0) radius = value;
        }
    })
}

// create an instance of a Circle constructor
const circle = new Circle(1);


// Prototype - means parent of that object, the object it inherits from all properties and methods in the prottoype chain
// To access the prototpye of an object - both works in the browser 
    // 1. obj.__proto__
circle.__proto__
    // 2. using Object.getPrototypeOf(obj)  
Object.getPrototypeOf(circle);


// Property attributes - data attributes vs accessor attributes 
// 1. Data property attributes 

// acessessing data attributes
Object.getOwnPropertyDescriptor(circle, "radius");


// Constructor prototype 
Circle.prototype // points to the object that has methods and properties which all instances of the constructor function will inherit from it

// Prototype vs Instance members 
// 1. Instance methods and properties are defined inside the constructor function by using this keyword
// 2. Prototype members are defined on the constructor's prototype 

const circle1 = new Circle();
const circle2 = new Circle(5);

Circle.prototype.draw =  function() {
    console.log("draw a circle with a radius of  " + this.radius);
}

// Iterating instance members: Object.keys(obj)
for (let key of Object.keys(circle1)) {

}
    
// Iterating instance and prototype properties: for in loop
for (let key in circle1) {

}

// to check if a member is an instance or prototype member
circle1.hasOwnProperty("draw");


/* Javascript Review 
    Object Oriented Programming (OOP)
    3. Prototypical Inheritance 
    Sept 25, 2024
*/

// Creating our own prototypical inheritance
function Shape(color) {
    this.color = color;
}
Shape.prototype.duplicate = function () { 
    console.log("duplicate shape");
}

function Circle(radius, color) {
    // Calling the super constructor
    Shape.call(this, color)
    this.radius = radius;
}

// Intermediate Function Inheritance 
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
} 
// create inheritance
extend(Circle, Shape);


Circle.prototype.draw = function () { 
    console.log("draw");
 }

function Square(size, color) {
    // Calling the super constructor
    Shape.call(this, color)
    this.size = size;
}

extend(Square, Shape);

// override methods
Circle.prototype.duplicate = function() {
    console.log("duplicate circle")
}

Square.prototype.duplicate = function() {
    console.log("duplicate square")
}

const s = new Shape();
const c = new Circle(1, "green");
const sq = new Square(2, "blue");

// Polymorphism
const shapes = [s, c, sq];
for (let shape of shapes) {
    //shape.duplicate();
}

// Composition - design principle that small resuable functions and objects are combined to build more complex behavior
const canWalk = {
    walk() {
        console.log("Walking...");
    }
}

const canSpeak = {
    speak() {
        console.log("Speaking...");
    }
}

// compose those objects 
// 1. Spread operator 
const person = { ...canSpeak, ...canWalk}

function Person() {
    
}
// using Object.assign
Object.assign(Person.prototype, canSpeak, canWalk);

// mixin - function that can be used to combine properties and methods from multiple objects into a single object
function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

function Student() {

}
mixin(Student.prototype, canSpeak, canWalk);

const student1 = new Student();

for (let key in student1) {
    
}


/* Excercises */
// 1. HTMLElement and HTMLSelectElement
function HTMLElement() {
    this.click = function() {
        console.log("clicked");
    }
}

HTMLElement.prototype.focus = function() {
    console.log("focused");
}

HTMLElement.prototype.render = function() {
    console.log("render");
}

function HTMLSelectElement(items = []) {
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function() {
        return `
<select>${this.items.map(item => `
    <option> option ${item} </option>`).join("")}
</select>`;  
    }
}

const e = new HTMLElement();

HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

// override render method 


// 2. HTMLImageElement with render method
function HTMLImageElement(src) {
    this.src = src;

    this.render = function() {
        return `<img src="${this.src}" />`;
    }
}

HTMLImageElement.prototype = new HTMLElement();
HTMLImageElement.prototype.constructor = HTMLImageElement;


const se = new HTMLSelectElement([0, 1]);

const img = new HTMLImageElement();
img.src = "http://";


const elements = [
    new HTMLSelectElement([1, 2, 3]),
    new HTMLImageElement("https://college.logo")
]

for (let element of elements) {
   
}




