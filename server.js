const express = require("express");
const mongoose = require("mongoose");

require('dotenv/config');
app = express();

//import routes
const postsRoute = require('./routes/posts');
//Middleware , Everytime we go to /posts , then just goto postsRoute
//Can have multiple middleware
app.use('/posts', postsRoute);

//routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("Database connection successful");
    } else {
      console.log("Error in connecting with database :" + err);
    }
  }
);


//Server started
app.listen(3000);
