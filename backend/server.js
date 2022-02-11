const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json()); // <-- body parser
app.use(express.urlencoded({ extended: false })); // <-- url encode

// Goal routes
app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
