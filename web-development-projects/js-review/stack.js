// using private 
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

function go() {
    console.log("Go");
}

// CommonJS Format of exporting multiple objects(functions, classes, properties);
module.exports = { Stack, go};