require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const logger = require("morgan");
const session = require("express-session");



const app = express();
const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}


app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactPractice", {
        useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    }
  ).then(() => console.log('Database connected successfully')
  ).catch(err => console.log(err));

  if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

  app.use((err, req, res, next) => {
    console.log(err);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.listen(port, () => {
    console.log('Server running on port ' + port)
  });
  