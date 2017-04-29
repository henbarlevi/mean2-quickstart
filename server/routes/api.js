const express = require('express');
const router = express.Router();
const path = require('path');
var fs = require('fs')


/* GET api listing. */
router.use('/', (req, res, next) => {
    console.log('api')
    next();
});


module.exports = router;