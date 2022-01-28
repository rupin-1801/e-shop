const express = require("express");

const routes = express();

routes.route("/").get((req, res) => {
  res.status(200).json("connected");
  console.log("accessed.");
});

module.exports = routes;
