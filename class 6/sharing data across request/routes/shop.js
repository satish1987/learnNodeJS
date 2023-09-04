const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

//when you use get method it can match exact url but in use it can not
router.get('/',(req, res, next)=>{
    console.log('shop.js', adminData.products);
    res.sendFile(path.join(rootDir ,'views', 'shop.html'));
});

module.exports = router;