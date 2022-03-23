let fs = require("fs");
let message = "Hello everyone \n";
//writeFileSync 3rd argument appends the data
fs.writeFileSync("message.txt", message, {flag: 'a+'});
console.log("THE END");