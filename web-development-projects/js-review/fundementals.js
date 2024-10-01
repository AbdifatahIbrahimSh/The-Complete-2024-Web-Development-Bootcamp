/* Javascript Review 
    Fundementals
    Control Flow Exercises
    Sept 22, 2024
*/

// 1. maximum of two numbers
function max(num1, num2) {
    if (num1 === num2) 
        return "The same";
    return num1 > num2 ? num1 : num2;
}

// 2. fizzbuzz fucntion 
function fizzBuzz(num1) {
    if (num1 % 3 == 0 && num1 % 5 == 0)
        return "FizzBuzz"
    else if (num1 % 3 == 0)
        return "Fizz";
    else if (num1 % 5 == 0)
        return "Buzz"
    return "Not Divisible";
}

// 3. speed limit function 
function speedLimit(speed) {
    const speedLimit = 70;
    if (speed < speedLimit)
        return "Ok"
    else {
        let points = 0;
        points = Math.floor((speed - speedLimit) / 5) 
        return "Points " +  points;
    }
}

// 4. show numbers 
function showNumbers(range) {
    for (let i = 0; i < range; i++) {
        if (i % 2 == 0) 
            console.log(i, " \"Even\"");
        else 
            console.log(i, " \"Odd\"")
    }
}

// 5. count truthy for of loop
function countTruthy (array) {
    let count = 0; 
    for(let number of array) {
        if (number)
            count++;
    }
    return count;
 }

 // 6. show properties of the string type 
 function showProperties(obj) {
    for(let key in obj) {
        if (typeof obj[key] === "string") 
            console.log(key, obj[key]);
    }  
 }

// 7. sum of multiplies of 3 and 5
function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) 
            sum += i;
    }
    return sum;
}

// 8. calculate grade 
function calculateGrade(marks) {
    let sum = 0;
    for (let mark of marks)
        sum += mark;
    const average = Math.round(sum / marks.length);

    if (average < 60) return "F";
    else if (average < 70) return "D"
    else if (average < 80) return "C"
    else if (average < 90) return "B"
    return "A"
}

// 9. show stars
function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let stars = "";
        for (let column = 1; column <= row; column++) {
            stars += "*";
        }
        console.log(stars);
    }
}
// 10. show primes
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0)  {
                isPrime = false;
                break;
            }
        }

        if (isPrime) console.log(number);
    }
}

/* Javascript Review 
    Objects and Thier Exercises
    Sept 22, 2024
*/

// Object Literal Notation 
let user = {
    name: "Ahmed", 
    age: 24, 
    username: "mohamed",
    isActive: true,
    great: function(){
        console.log("Hello, I am ", this.name);
    }
}

// Factory Notation
function createUser(name, age, isActive) {
    return {
        name,  // shorthand of writing property if they the same name with the parameter
        age, 
        username: "mohamed",
        isActive,
        great(){
            console.log("Hello, I am ", this.name);
        }
    }
}

const user1 = createUser("Ahmed", 20, true);

// Constructor Notation 
function User(name, age) {
    this.name = name;
    this.age = age;
    this.great = function() {
        console.log("Hello, I am ", this.name);
    }
}

const user2 = new User("Hoodo", 20);


// Dynamic Nature of objects 
user2.isActive = true;
delete user2.isActive

// Enumerating the properties of an object 
for (let key of Object.keys(user)) {
}

for (let entry of Object.entries(user)) {
}
function checkProperty(property) {
    if ("name" in user) {
    }
}

// Cloning objects 
// 1. Spread Operator 
const userCopy = { ...user };
for (let key in userCopy) {
}

// 2. Object.assign
const userCopy1 = Object.assign({}, user);

// Template literals
const email = `
    Hi, John 
    
    We are going to invite you to the upcoming graducation cermonoy celebration at Masnor Hotel 
    at sept 24, 2024.

    Thanks.
`

// Date object 
const date = new Date();
date.toDateString().substring(4);

/* Exercises */
// 1. Create Address object 
function Address(city, street, zipCode) {
    this.city = city;
    this.street = street;
    this.zipCode = zipCode;
}

const address1 = new Address("a", "b", "c");
const address2 = new Address("a", "b", "c");

// checks equality
function areEqual(address1, address2) {
    const isEqual = true;
    for (let key in address1) {
       if (address1[key] !== address2[key])
        isEqual = false;
    }
    return isEqual;
}

// checks if they have the same reference 
function areSame(address1, address2) {
    if (address1 === address2)
        return true;
    return false;
}
areEqual(address1, address2);
areSame(address1, address2);

/* Javascript Review 
    Arrays and Thier Exercises
    Sept 23, 2024
*/

const numbers = [1, 2, 3, 4];

// adding
numbers.push(2);
numbers.unshift(3);
numbers. splice(3, 0, 'a', 2);

// removing 
numbers.pop();
numbers.shift();
numbers.splice(2, 1);

// finding primitives
numbers.indexOf(2);
numbers.lastIndexOf(2);
numbers.includes(1);

// finding objects 
const courses = [
    {name: "English"},
    {name: "Arabic"},
    {name: "Science"},
]

const course = courses.find(function (course) { 
    return course.name === "English"
 })

 // Arrow functions 
 courses.find(course => course.name === "English");

 // Emptying elements
 numbers.length = 0;

 // combining elements 
 const first = [1, 2,];
 const second = [3, 4];

 const combined = first.concat(second);
 const anotherWay = [...first, ...second];

 // Extraction of combined arrays
 const firstPart = combined.slice(0, 3);

 // Iterating elements in an array
 for (let element in combined) {
 }

 // Other way to iterate 
 firstPart.forEach(function (number, index) { 

  })

  // Joining returns string
  const joinedElements = firstPart.join(",");

  // Splitting returns string array
  const splittedArray = joinedElements.split(",");

  // Sorting
  numbers.sort();
  numbers.reverse();

  // sorting objects
  courses.sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  })

  // Testing elements 
  const courseA = courses.some(function(course) {
    return course.name.startsWith("A");
  })

  const allPositives = numbers.every(function(course) {
    return course.name.startsWith("A");
  })

  // filtering 
  const filteredCourses = courses.filter(value => value.name === "Arabic");

  // Mapping 
  const list = filteredCourses.map(function (course) { 
    return "<li>" + course.name + "</li";
   })

  const unorderedList = "<ul>" + list + "</ul>";

  // Reducing Arrays
  const listOfNumbers = [1, 2, 3, 4, 5, 6]
  const sumOfNumbers = listOfNumbers.reduce((total, number) => total + number);

/* Exercises */
// 1. ArrayRange 
function arrayFromRange(start, end) {
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i)
    }
    return array;
}

const rangeOfNumbers = arrayFromRange(-1, 4);

// 2. includes function 
function includes(array, searchElement) {
    for (let element of array) {
        if (element === searchElement)
            return true;
    }
    return false;
}

// 3. Excluding items of an array
function except(array, excluded) {
    const output = [];
    for (number of array){
        if (!excluded.includes(number))
            output.push(number);
    }
    return output;
}

// 4. Moving elements into different positions 
function move(numbers, index, offset) {
    const output = [...numbers];

    // check if the index exists
    if (index > output.length || index < 0)
        return "Invalid Index";

    // check if the offset is valid
    const position = index + offset;
    if (position >= output.length || position < 0)
        return "Invalid Offset";
    // do the work
    for (let number of output) {
        if (output.indexOf(number) === index) {
            const removedItem = output.splice(index, 1)[0];
            output.splice(index + offset, 0, removedItem);
        }
    }

    return output;
}

// 5. Count occurrences
function countOccurrences(array, searchElement) {
    let count = 0;
    for (let number of array) {
        if (!array.includes(searchElement)) 
            return -1;
        if (number === searchElement)
            count++;
    }
    return count;

    // use reduce method to find the occurences of those elements
    return array.reduce(function(count, number) {
        let occurrence = (number === searchElement) ? 1 : 0;
        return count + occurrence;
    }, 0)
    
} 

// 6. Get Max
function getMax(array) {
    if (array.length === 0) return undefined;
    //use for of loop
    let max = array[0];
    for (let number of array) {
        if (max < number) 
            max = number;
    }
    
    // using the reduce method
    return array.reduce((max, number) => (max < number) ? number: max, array[0]);
}

// 7. filter movies 
const movies = [
    { title: "a", year: 2018, rating: 4.5},
    { title: "b", year: 2018, rating: 4.7},
    { title: "c", year: 2018, rating: 3},
    { title: "d", year: 2017, rating: 4.5},
]

// movies of 2018 and rating > 4
// descending order 
// only with thier titles
const filteredMovies = movies
                            .filter(movie => movie.year === 2018 && movie.rating > 4)
                            .sort((a, b) => b.rating - a.rating)
                            .map(movie => ({title: movie.title}));


/* Javascript Review 
    Functions and thier Excercises
    Sept 24, 2024
*/

// function declaration 
function walk() {
    console.log("Walk");
}

// function expression
let run = function() {
    console.log("Walk");
}

// Hoisting - process of moving function declaration at the top of the file
// you can call a function before declaration 

// myName();

function myName() {
    console.log("My name is Abdifatah");
}


// Arguments 
function sum() {
    let total = 0;
    for (let number of sum.arguments) {
        total += number;
    }
    return total;
}

// Rest Operator 
function getDiscount(discount, ...prices) {
    return prices.reduce((a, b) => a + b) * (1 - discount);
}

// Default paramater values 
function interest(principal, rate = 3, years = 5) {
    rate = rate || 2.5;
    years = years || 2;
    return principal * rate / 100 * years;
}
   
// Getters and Setters and try catch block
let boy = {
    firstName: "Abdi",
    lastName: "Muna", 
    // to access the value
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    // to change the value
    set fullName(value) {
        if (value !== "string")
            throw Error("Value is not string");
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

try {
    //boy.fullName = true;
} catch(e) {
    console.log(e);
}

// Scope 
/* 
    let and const are code-blocked scope;
    var is a function-scoped variable;
    var if its outside its scope is global and will attach to the windows object.
*/

// This keyword
const video = {
    title: "Hargeisa Documentry", 
    year: 2024, 
    editors: ["Hodo", "Shayma", "Nasteho", "Bahja", "Khadra", "Bilan", "Amoun",],
    printTitle() {
        console.log(this);
    },
    printEditors() {
        this.editors.forEach(function (editor) {
            if (editor.length > 6) 
                console.log(this);
        }.bind(this));
    }
}

// to change the what this keyword represent use one those function methods call(), apply(), bind();

const student = {
    name: "Ahmed", 
    age: 20, 
    courses: ["English", "Arabic", "Science"]
}

function hi(school, grade) {
    const template = `
    ${this.name } is ${this.age} years old. 
    He goes to ${school} Secondary School. 
    He is grade ${grade}. 
    He studies ${this.courses.join(" ")}
    `;
    console.log(template);
}

// call method 
// hi.call(student, "Noradin", 7);

// apply method
// hi.apply(student, ["Noradin", 7]);

// bind method - doesn't call the function its creates a new function to be called 
const bindingFunction = hi.bind(student);
// bindingFunction("Sh Bashir", 12);

// bind method
// hi.bind(student, "26 June", 9);

/* Exercises */

// 1. sum function 
function sumFunction(...numbers) {
    if (numbers.length === 1 && Array.isArray(numbers[0]))
        numbers = [...numbers[0]];
    return numbers.reduce((a, b) => a + b);
}

// 2. Area of the circle
const cirlce = {
    radius: 1, 
    get area() {
        return Math.pow(this.radius, 2) * Math.PI;
    }
}

// 3. Error handling 
const array = [1, 2, 4, 5, 5, 1];
function countOccurrencesChecksIfItsArray(array, searchElement) {
    if (!Array.isArray(array))
        throw Error("It is not array.");
    return array.reduce(function(count, number) {
        let occurrence = (number === searchElement) ? 1 : 0;
        return count + occurrence;
    }, 0)
}

try {
    countOccurrencesChecksIfItsArray(null, 5);
} catch(e) {
    e.message;
}

