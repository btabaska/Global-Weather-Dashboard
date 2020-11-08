//generates a jumbotron for the main page on search
generateJumbotron = (city, cityName) => {
  cityWeatherObject = city;
  document.querySelector("#current-temp").innerHTML =
    "Temperature: " + cityWeatherObject.current.temp;
  document.querySelector("#current-humidity").innerHTML =
    "Humidity: " + cityWeatherObject.current.humidity;
  document.querySelector("#current-wind").innerHTML =
    "Wind Speed: " + cityWeatherObject.current.wind_speed;
  document.querySelector("#current-uv").innerHTML =
    "UV Index: " + cityWeatherObject.current.uvi;
  //calls the uvIndex function from app.js
  document
    .querySelector("#current-uv")
    .setAttribute(
      "style",
      `background-color: ${uvIndexHighlighting(cityWeatherObject.current.uvi)}`
    );

  document.querySelector("#jumbotroncity").innerHTML = cityName;
  document.querySelector("#current-date").innerHTML =
    " " + moment().format("MMMM Do YYYY");
  var cityTitleDiv = document.querySelector("#jumbotroncity");
  var cityTitleDivEmojii = document.createElement("i");
  //calls the emojii picker from citiesAside.js
  cityTitleDivEmojii.setAttribute(
    "class",
    weatherEmojiiPicker(cityWeatherObject.current.weather[0].main)
  );
  cityTitleDiv.appendChild(cityTitleDivEmojii);
  //Calls the next function in the chain.
  generateForecastCards(cityWeatherObject, cityName);
};
