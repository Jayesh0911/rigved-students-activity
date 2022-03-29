let express = require('express');
let app = express();
let fs = require('fs');
let parser = require('body-parser');
const { json } = require('express/lib/response');
let port = 3001;

app.listen(port,() => console.log(`Server is running at port no ${port}`));
app.use(parser.json());


//crud operations like get , post ,put, delete are done

//post method is done here we read the file and write over it some data
app.post('/user',(request,response) =>{
    let data = fs.readFileSync('users.json');
    let dataString = data.toString();   
    if(dataString.lenght<1 || dataString == ""){
        jsArray = [];
    }
    else{
        jsArray = JSON.parse(dataString);
    }

    let content = request.body;
    jsArray.push(content);

    let jsObject = JSON.stringify(jsArray);
    fs.writeFileSync('users.json', jsObject);
    response.send('Entries Added')
});

//get method is done here for reading values from the file

app.get('/user', (request,response) => {
    let data = fs.readFileSync('users.json');
    let dataString = data.toString();
    let jsonObject = JSON.parse(dataString);
    response.send(jsonObject);
}); 

//put method is used here

app.put('/user/:id/:name/:age', (request,response) => {
    let id = request.params.id;
    let name = request.params.name;
    let age = request.params.age;
    let data = fs.readFileSync('users.json');
    let dataString = data.toString();
    let jsArray = undefined;
    if(dataString.length<1 || dataString == ""){
        jsArray = [];
    }
    else{
        jsArray = JSON.parse(dataString);
    }
    let user = {userId : id, userName : name, userAge : age};
    jsArray.push(user);
    let jsonArray = JSON.stringify(jsArray);
    fs.writeFileSync('users.json',jsonArray);
    response.json(jsonArray);
});

//delete method used here

app.delete('/user/:id', (request,response) =>{
    let id = request.params.id;
    let data = fs.readFileSync('users.json');
    let datastring = data.toString();
    let jsonObject = JSON.parse(datastring);
    for(let i=0;i<jsonObject.length;i++){
        if(jsonObject[i].userId == id){
            jsonObject.splice(i,1);
            let jsObject=JSON.stringify(jsonObject);
            fs.writeFileSync('users.json',jsObject);
            response.json(jsonObject);
        }
    }
    
});