const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html");

  app.post("/", function(req, res) {

    const query = req.body.cityName;
    const apiKey = "ada63f8903d171567557ede85d0bddc3"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + apiKey;

    https.get(url, function(response) {
      console.log(response);

      response.on("data", function(data) {

        const weatherData = JSON.parse(data)
        const temp = weatherData.main.temp
        const des = weatherData.weather[0].description
        const icon = weatherData.weather[0].icon
        const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png"

        res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius.</h1>");
        res.write("<h3>The weather is currently " + des + "</h3>");
        res.write("<img src=" + imageURL + ">");

        res.send();
      })
    })
  })
})



app.listen(3000, function() {
  console.log("Server is running on port 3000.");
})
