/* Javascript Review 
    Object Oriented Programming (OOP)
    5. ES6 Classes 
    Sept 26, 2024
*/

// we implement private members using the WeakMap() constructor 
const _radius = new WeakMap();
const _move = new WeakMap();

class Shape {
    constructor(color) {
        this.color = color;
    }

    toString() {
        console.log(`This is a ${this.color} shape`);
    }
}

class Circle extends Shape {
    constructor(radius, color) {
        super(color)
        // private property
        _radius.set(this, radius);
        // private method
        _move.set(this, ()=> {
            console.log("move")
        });
    }
    
    // getter 
    get radius() {
        return _radius.get(this);
    }

    // setter 
    set radius(value) {
        if (value <= 0) throw Error("radius must be greater than zero");
        _radius.set(this, value);
    }

     draw() {
        _move.get(this)();
        console.log("draw");
    }

    // method overriding 
    toString() {
        console.log("This is a circle shape with a " + _radius.get(this) + " radius.");
    }
}

const c = new Circle(1, "red");

const shapes = [
    new Shape("blue"),
    new Circle(1, "green")
]

for (let shape of shapes) {
    shape.toString();
}

/* Exercises */
// 1. Stack 
const _items = new WeakMap();
class Stack {
    constructor() {
        _items.set(this, []);
    }

    peek() {
        if (_items.get(this).length == 0) 
            throw Error("Stack is empty");
        return _items.get(this)[_items.get(this).length -1];
      
    }
    pop() {
        if (_items.get(this).length === 0) 
            throw Error("Stack is empty");
        return _items.get(this).pop();
        
    }
    push(item) {
        _items.get(this).push(item);
    }

    get count() {
        return _items.get(this).length;
    }
}
