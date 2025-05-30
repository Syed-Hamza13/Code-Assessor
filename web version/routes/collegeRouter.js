
// core modules 
const path = require('path');

// external modules
const express = require('express');

//local module
const rootDir = require('../utils/pathUtils')


const collegeRouter = express.Router();

collegeRouter.get("/college-dashboard", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views/college/", "collegeDashboard.html"))
    
})

module.exports = collegeRouter;
