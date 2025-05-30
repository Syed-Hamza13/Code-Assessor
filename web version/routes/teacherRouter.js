
// core modules 
const path = require('path');

// external modules
const express = require('express');

//local module
const rootDir = require('../utils/pathUtils')


const teacherRouter = express.Router();

teacherRouter.get("/teacher-dashboard", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views/teacher/", "teacherDashboard.html"))
    
})

teacherRouter.get("/see-analytics", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views/teacher/", "teacherAnalytics.html"))
    
})

module.exports = teacherRouter;
