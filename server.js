const express = require("express");
const app = express();
// const bodyParser = require("body-parser").urlencoded({ extended: true });
// const bodyParser = express.urlencoded({ extended: true });
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "views"); // app.set("views",name of the folder (exemple: views) )

app.use(express.static(path.join(__dirname, "assets"))); // Static folder
app.use(express.urlencoded({ extended: true })); // using the integrate bodyParser

// all (get post put patch delete)
// http request methods

profile = {
  firstName: "Rayen",
  lastName: "Nairi",
};

app.get("/home", (req, res, next) => {
  // res.sendFile(__dirname + "\\index.html");
  // process.platform  output: win32

  // res.sendFile(path.join(__dirname, "views", "index.html"));

  res.render("index", profile);
});

var students = [
  { id: 0, name: "Rayen" },
  { id: 1, name: "Yassine" },
  { id: 2, name: "Alae" },
];

app.get("/students", (req, res, next) => {
  res.send(students);
});

app.get("/student/:id", (req, res, next) => {
  let s = students.find((student) => student.id == req.params.id);
  if (s) res.send(s);
  else res.send("Student is not found :(");
});

app.delete("/student/delete/:id", (req, res, next) => {
  var studentPosition = students.findIndex(
    (student) => student.id == req.params.id
  );

  if (studentPosition != -1) {
    students.splice(studentPosition, 1);
    res.send(students);
  } else res.send("Student not found");
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

app.get("/profile/:name/:id", (req, res, next) => {
  res.send(
    req.params.name +
      " " +
      req.params.id +
      " " +
      req.query.id +
      " " +
      req.query.name
  );
});

app.listen(5000, () => {
  console.log("Server is running (port 5000)..");
});
