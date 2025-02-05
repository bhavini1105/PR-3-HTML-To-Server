const express = require('express');
const app = express();
const port = 8090;

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    return res.render('index');
})

app.get('/index',(req,res)=>{
    return res.render('index');
})

app.get('/charts',(req,res)=>{
    return res.render('charts');
})

app.get('/widgets',(req,res)=>{
    return res.render('widgets');
})

app.get('/tables',(req,res)=>{
    return res.render('tables');
})

app.listen(port , (err)=>{
    if(!err){
        console.log("Server Start on Port..");
        console.log("http://localhost:"+port);
    }
})