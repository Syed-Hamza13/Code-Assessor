
// core modules 
const path = require('path');

// external modules
const express = require('express');

//local module
const rootDir = require('../utils/pathUtils')


const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views/home/", "index.html"))
    // res.sendFile(path.join(rootDir, "views/home/", "index.css"))
    
})

module.exports = homeRouter;
