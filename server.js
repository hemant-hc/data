const express = require("express");
const app = express();

const data = require("./sample.json");
app.get("/data", function (req, res) {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});

app.listen(3000);
