let fs = require("fs");
let data = fs.readFileSync("users.txt");
let userInfo = data.toString();
let userItems = userInfo.split(";");

// object/array destructure syntax
let [name, age, gender] = userItems;
console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);