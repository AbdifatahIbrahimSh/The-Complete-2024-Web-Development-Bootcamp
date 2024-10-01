const fs = require("fs")

fs.writeFile("message.txt", "Hello World\n my name is Ahmed", (error) => {
    if (error) throw error;
    console.log("Saved");
})

fs.readFile("./message.txt", "utf-8", (error, data) => {
    if (error) throw error;
    console.log(data);
})