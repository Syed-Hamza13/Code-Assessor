const express = require('express');

const app = express();
const port = 3000;

//local module
const rootDir = require('./utils/pathUtils');
// Importing the routers
const homeRouter = require('./routes/homeRouter');
const studentRouter = require('./routes/studentRouter');
const teacherRouter = require('./routes/teacherRouter');
const collegeRouter = require('./routes/collegeRouter');


// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.use(homeRouter);
app.use(studentRouter);
app.use(teacherRouter);
app.use(collegeRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

