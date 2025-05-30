
// core modules 
const path = require('path');

// external modules
const express = require('express');

//local module
const rootDir = require('../utils/pathUtils')


const editorRouter = express.Router();
editorRouter.get("/code-editor", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views/editor/", "editor.html"))
    
})

module.exports = editorRouter;