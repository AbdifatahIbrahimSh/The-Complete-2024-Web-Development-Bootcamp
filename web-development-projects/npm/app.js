import generateStupidName from "./node_modules/sillyname/index.js";


let names = [];
for (let i = 0; i < 10; i++) {
    let name = generateStupidName();
    names.push(name); 
}
console.log(names)