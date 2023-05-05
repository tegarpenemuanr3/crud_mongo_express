// Import modul
const mongoose = require("mongoose");

// Connect to MongoDB
const mongoURI = "mongodb://localhost/crud_mongo";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(mongoURI, options)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// export instance
module.exports = mongoose.connection;
