let fs = require('fs');
// Buffer stream
let data = fs.readFileSync("simple.txt"); 
// converting buffer streams to string
let content = data.toString();
console.log(content);