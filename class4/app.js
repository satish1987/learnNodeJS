const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

//handling route request

app.get('/add-product',(req, res, next)=>{
    //console.log('My second middleware function');
    res.send('<h1>My first express.js code</h1><form method="POST" action="/save-product"><input type="text" name="title"><button type="submit">Submit</button></form>');
    //next();
});

//parsing incoming request
app.post('/save-product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});


app.get('/',(req, res, next)=>{
    //console.log('My Express JS home page');
    res.send('<h1>My Express JS home page</h1>');
});

app.listen(3000);

