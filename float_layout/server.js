const express = require("express");
const server = express();
server.use(express.static("/home/dcil164/Documents/groupExercise/exercises/float_layout"));
const port = 3333;
server.listen(port, () => console.log(`Server is listening to the port: ${port}`));