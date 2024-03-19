const express = require("express");
const bodyParser = require("body-parser").urlencoded({ extended: true });
const app = express();

// all (get post put patch delete)
// http request methods

app.get("/", (req, res, next) => {
  res.send(
    "<form action='/about' method='POST' ><input type='text' name='firstName' /><button type='submit' >Send</button></form>"
  );
});

app.post("/about", bodyParser, (req, res, next) => {
  // let name = [];
  // req.on("data", (chunk) => {
  //   name.push(chunk);
  // });
  // req.on("end", () => {
  //   let firstName = Buffer.concat(name).toString();
  //   console.log(name);
  //   console.log(firstName);
  // });
  res.send("<h1>" + req.body.firstName + "</h1>");
});
app.get("/profile/:name/:id", (req, res, next) => {
  res.send(req.params.name + " " + req.params.id);
});

app.listen(5000, () => {
  console.log("Server is running (port 5000)..");
});
