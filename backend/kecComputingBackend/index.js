//server creation
var express=require('express');
var app=express();
const PORT=3001;
app.listen(PORT,()=>{
    console.log(`Backend server started...\nUrl:http://localhost:${PORT}`);
})
app.get('/',(req,res)=>{
    res.json({server:"welcome to backend server..",url:"localhost",PORT:{PORT}});

})
app.get('/json',(req,res)=>{
    res.json({server:"welcome to backend server..",url:"localhost",PORT:{PORT}});
    })
app.get('/static',(req,res)=>{
    res.sendFile('C:/Users/kavin/OneDrive/Documents/TrainingReact/react/kecComputingBackend/index.html')
})