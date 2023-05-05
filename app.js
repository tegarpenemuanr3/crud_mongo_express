const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/crud_mongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Initialize app
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/users", userRoutes);

// Start server
app.listen(3000, () => console.log("Server started on port 3000"));
