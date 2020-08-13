const express = require("express");
const bodyParser = require("body-parser");
const server = express();
server.use(express.static("/home/dcil164/Documents/groupExercise"));
const port = 8787;
server.listen(port, function () {
    console.log(`Server is listening to the port: ${port}`);
});