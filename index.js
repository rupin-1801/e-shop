const express = require("express");
const routes = require("./routes/routes");
const app = express();

app.use(routes);

app.listen(5000, () => {
  console.log("server running on port 5000.");
});

module.exports = app;
