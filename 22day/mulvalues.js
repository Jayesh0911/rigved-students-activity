let read=require('readline-sync');
let fs=require('fs');
let id=read.questionInt("Enter your ID: ");
let name=read.question("Enter your name: ");
let salary=read.questionInt("Enter your salary: ");
let values={id:id,name:name,salary:salary};
let jsonString=JSON.stringify(values);
let data=fs.readFileSync('users.json').toString();
if(data.endsWith('}]')==true){            
    let d1=data.slice(0,(data.length-1))
    let d2=`${d1},\n${jsonString}]`
    fs.writeFileSync('users.json',d2);
    console.log("Stored the values in Json File!");
}else{
    let d2=`${jsonString}`;
    fs.writeFileSync('users.json',d2);
    console.log("Stored the values in Json File!");  
}