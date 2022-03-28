let express=require('express');
let fs=require('fs');
let app=express();
app.listen(3003,()=>console.log('Server is running at 3002'));
app.get('/values',(request,response)=>{
    let data=fs.readFileSync('values.json');
    let jsString=data.toString();
    let jsonObject=JSON.parse(jsString);
    response.json(jsonObject);
});
