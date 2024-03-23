const express = require("express");
const route = express.Router();

route.use(express.urlencoded({ extended: true }));

profile = {
  firstName: "Rayen",
  lastName: "Nairi",
};

route.get("/:name/:id", (req, res, next) => {
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

module.exports = route;
