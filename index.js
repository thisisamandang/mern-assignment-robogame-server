// Import required dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const grid = require("./routes/robotRoutes");
const cors = require("cors");

// Middleware to parse JSON request bodies
app.use(cors());
app.use(bodyParser.json());
app.use("/api", grid);
// Define the initial position of the robot
let robotPosition = { x: 0, y: 0 };

// Define the position of the red square

// Start the server
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
