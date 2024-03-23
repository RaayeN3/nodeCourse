const express = require("express");
const mongo = require("mongodb").MongoClient;
const app = express();

// const bodyParser = require("body-parser").urlencoded({ extended: true });
// const bodyParser = express.urlencoded({ extended: true });
const path = require("path");

//app.set("view engine", "ejs");
//app.set("views", "views"); // app.set("views",name of the folder (exemple: views) )

app.use(express.static(path.join(__dirname, "assets"))); // Static folder
app.use(express.urlencoded({ extended: true })); // using the integrate bodyParser

// all (get post put patch delete)
// http request methods

url = "mongodb://localhost:27017/myTest";

app.get("/home", (req, res, next) => {
  console.log("connecting..");
  mongo.connect(url, (err, result) => {
    if (err) {
      console.error("Error creating database:", err);
    } else {
      console.log("Database created");
    }
  });
  // res.sendFile(__dirname + "\\index.html");
  // process.platform  output: win32

  // res.sendFile(path.join(__dirname, "views", "index.html"));

  //res.render("index", profile);
});

app.get("/", (req, res, next) => {
  res.send(
    "<form action='/about' method='POST' ><input type='text' name='firstName' /><button type='submit' >Send</button></form>"
  );
});

app.post(
  "/about",
  /* bodyParser, */ (req, res, next) => {
    // let name = [];
    // req.on("data", (chunk) => {
    //   name.push(chunk);
    // });
    // req.on("end", () => {
    //   let firstName = Buffer.concat(name).toString();
    //   console.log(name);
    //   console.log(firstName);
    // });

    if (req.body.firstName) res.send("<h1>" + req.body.firstName + "</h1>");
  }
);

app.listen(5000, () => {
  console.log("Server is running (port 5000)..");
});
