const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const app = express(); // create express app

app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.get("/*", function (req, res) {
  res.sendFile(path.join("index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server started");
});
