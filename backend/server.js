const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConnect = require("./config/config");

// Import user routes
const userRoutes = require("./routes/userRoutes");
const programRoutes = require("./routes/programRoutes");
// Middleware
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use user routes
app.use("/users", userRoutes);
app.use("/Programs", programRoutes);
// Access environment variables
const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Good app listening on port ${port}`);
});

module.exports = app;
