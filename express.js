//imports
const express = require("express");
const bodyParser = require("body-parser");

//global variables
const app = express();

//declare
app.use(bodyParser.urlencoded({ extended: true }));

////////////                       webapp                             //////////////

//init
app.listen(3000, function () {
  console.log("server has started on port 3000");
});

//Calc form
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let num1 = req.body.num1;
  let num2 = req.body.num2;

  let result = +num1 + +num2;

  res.send("The result of the calculation is " + result);
});

//bmi calc form
app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  let { weight } = req.body;
  let { height } = req.body;

  let bmi = +weight / (+height * +height);

  console.log(weight + height + bmi);
  res.send(`Your bmi is ${+bmi}`);
});
