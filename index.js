const { application } = require("express");
const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/cats", (req, res) => {
  const cats = ["bob", "jim", "john", "sally"];
  res.render("cats", { cats });
});
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (!data) res.render("notfound", { subreddit });

  res.render("subreddit", { ...data });
});

app.listen(3000, () => {
  console.log(`server is running`);
});

const cats = ["bob", "jim", "john", "sally"];

cats.forEach(function (i) {
  console.log(i + 1);
});
