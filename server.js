const express = require("express");

const app = express();

// all (get post put patch delete)
//http request methods

app.get("/", (req, res, next) => {
  res.send("<h1>Home page</h1>");
});
app.get("/about", (req, res, next) => {
  res.send("<h1>About page</h1>");
});

app.listen(5000, () => {
  console.log("Server is running (port 5000)..");
});
