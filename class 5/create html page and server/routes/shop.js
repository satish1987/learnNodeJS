const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

//when you use get method it can match exact url but in use it can not
router.get('/',(req, res, next)=>{
    res.sendFile(path.join(rootDir ,'views', 'shop.html'));
});

module.exports = router;