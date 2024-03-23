const express = require("express");
const route = express.Router();

route.use(express.urlencoded({ extended: true }));

let students = [
  { id: 0, name: "Rayen" },
  { id: 1, name: "Yassine" },
  { id: 2, name: "Alae" },
];

route.get("/", (req, res, next) => {
  res.send(students);
});

route.delete("/delete/:id", (req, res, next) => {
  var studentPosition = students.findIndex(
    (student) => student.id == req.params.id
  );

  if (studentPosition != -1) {
    students.splice(studentPosition, 1);
    res.send(students);
  } else res.send("Student not found");
});

// app.get("/student/addStudent", (req, res, next) => {
//   res.send(
//     "<form action='/student/addStudent' method='POST' ><input type='text' name='id' /><input type='text' name='name' /><button type='submit' >Send</button></form>"
//   );
// });

route.post("/addStudent", (req, res) => {
  students.push({ id: req.body.id, name: req.body.name });
  console.log(req.body.id);
  res.send(students);
});

route.put("/update/:id", (req, res) => {
  let student = students.find((student) => student.id == req.params.id);
  student.name = req.body.name;
  res.send(students);
});

route.get("/:id", (req, res, next) => {
  let s = students.find((student) => student.id == req.params.id);
  if (s) res.send(s);
  else res.send("Student is not found :(");
});

module.exports = route;
