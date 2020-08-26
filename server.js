const express = require("express");
const server = express();
server.use(express.static("/home/dcil164/Documents/Exercises"));
const port = 3838;
server.listen(port, function () {
    console.log(`Server is listening to the port: ${port}`);
});