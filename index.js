const express = require("express");
const path = require("path");
const app = express();

// config template enginees
app.set("views", path.join(__dirname, "./src/views"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World\n duy anh");
});
app.get("/abc", (req, res) => {
  res.send("check abc");
});
app.get("/hoidanit", (req, res) => {
  res.render("sample.ejs");
});
app.listen(8000);
