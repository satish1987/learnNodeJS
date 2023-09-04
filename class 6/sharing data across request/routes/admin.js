const path  = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();
const products = [];

//handling route request
router.get('/add-product',(req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

//parsing incoming request
router.post('/add-product',(req, res, next)=>{
    //console.log(req.body);
    products.push({title: req.body.title})
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
