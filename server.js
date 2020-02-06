// Importing all modules
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path")

// Setting port
const PORT = process.env.PORT || 3002;

// creating app
const app = express();

// App settings
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// adding routes
require("./routes/htmlRoutes.js")(app, path)
require("./routes/apiRoutes.js")(app)


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
				 { useNewUrlParser: true });

// Starting app to listen on selected port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});