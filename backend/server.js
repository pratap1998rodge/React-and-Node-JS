const dotenv = require("dotenv").config();
//Express is for building the Rest apis
const express = require("express");

//If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:
const http = require("http");

//body-parser helps to parse the request and create the req.body object
const bodyParser = require("body-parser");

//cors provides Express middleware to enable CORS with various options
const cors = require("cors");

const { logger } = require("../backend/winstonlogger/logger");
const moment = require("moment");

//initialize the exxpress
const app = express();

// //Notice that we set origin: http://localhost:5000
// var corsOptions = {
//   origin: "http://localhost:5000",
// };

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// We need call sync() method
const db = require("../backend/models/initializeSequelize");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Cloudoptimo node application." });
});

//So, we need to include the routes in server.js:
require("../backend/routes/product.routes")(app);

// set port, listen for requests
//listen on port 5000 for incoming requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
  logger.info(
    `Server is running on port ${PORT}.` + moment().format("MMM d,YYYY,h:mm:ss")
  );
});
