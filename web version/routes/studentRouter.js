
// core modules 
const path = require('path');

// external modules
const express = require('express');

//local module
const rootDir = require('../utils/pathUtils')


const studentRouter = express.Router();

studentRouter.get("/student-dashboard", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views/student/", "studentDashboard.html"))
    
})

studentRouter.get("/student-analytics", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views/student/", "studentAnalytics.html"))
    
})

module.exports = studentRouter;
