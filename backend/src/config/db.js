const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "test") {
  mongoose.connect(
    "mongodb+srv://admin:admin@socialmediadatabase.0yfvp6g.mongodb.net/users?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
} else {
  mongoose.connect(
    "mongodb+srv://admin:admin@socialmediadatabase.0yfvp6g.mongodb.net/users2?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
}

const db = mongoose.connection;

module.exports = db;
