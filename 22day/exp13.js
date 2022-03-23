let fs = require('fs');
// this is a JavaScript object
let employee = {id:3, name:"Alex", salary:35000};
// converting JavaScript object to JSON
let jsonString = JSON.stringify(employee);

console.log(employee);
console.log(jsonString);

fs.writeFileSync('employee.json', jsonString);
console.log('The end');
