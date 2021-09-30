const express = require("express");

const app = express();

// TEMPLETE ENGINE
app.set("view engine", "ejs");

// MİDDLEWARES
app.use(express.static("public"));

// ROUTES
app.get("/", (req, res) => {
  res.status(200).render("index", {
    page_name: "index",
  });
});

app.get("/about", (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`APP STARTED ON PORT ${port}`);
});
