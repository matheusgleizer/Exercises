const express = require("express");
const server = express();
server.use(express.static("/home/dcil164/Documents/groupExercise/exercises/in_doc_float"));
const port = 3333;
server.listen(port, () => console.log(`Server is listening to the port: ${port}`));