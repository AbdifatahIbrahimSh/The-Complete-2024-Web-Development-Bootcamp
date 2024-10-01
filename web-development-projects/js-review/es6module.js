export class Shape {
    constructor(color) {
        this.color = color;
    }

    toString() {
        console.log(`This is a ${this.color} shape`);
    }
}