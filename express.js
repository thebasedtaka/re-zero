//imports
const express = require("express");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const res = require("express/lib/response");
const { response } = require("express");

//global variables
const app = express();
const apiKey = "57081eba95cd93040b4a8c36eb7c1d8a";
//declare
app.use(bodyParser.urlencoded({ extended: true }));

///function calls

async function getJson(api) {
  const data = await fetch(api);
  const json = await data.json();

  return json;
}

function parseWeather(json) {
  const { name } = json;
  const { description } = json.weather[0];

  console.log(json);
  const response = `<p>in ${name} There are ${description} outside</p>`;
  return response;
}

function parseTemp(json) {
  const { name } = json;
  const { temp } = json.main;

  console.log(json);
  const response = `<p>in ${name} it is ${temp} degrees outside</p>`;
  return response;
}
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
  let { weight, height } = req.body;

  let bmi = +weight / (+height * +height);

  console.log(weight + height + bmi);
  res.send(`Your bmi is ${+bmi}`);
});

//weather app
app.get("/WeatherApp", function (request, response) {
  response.sendFile(__dirname + "/weather.html");
});

app.post("/WeatherApp", function (req, res) {
  //43.731548 -79.762421
  const { lat, lon } = req.body;

  getJson(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  ).then((weatherData) => {
    res.write(parseWeather(weatherData));
    res.write(parseTemp(weatherData));
    res.write(JSON.stringify(req.body));
    res.send();
  });
});
