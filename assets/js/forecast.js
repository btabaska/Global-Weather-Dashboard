generateForecastCards = (city, cityName) => {
  clearOutputDiv("#cardhomerow");
  let cityWeatherObject = city;
  var cardHomeRow = document.querySelector("#cardhomerow");

  //For loop for every card returned up to card 5 in order to get a 5 day forecast
  for (let i = 0; i < 5; i++) {
    let forecastCard = document.createElement("div");
    forecastCard.setAttribute(
      "class",
      "card text-white bg-primary mb-2 mr-2 p-2"
    );
    forecastCard.setAttribute("style", "max-width: 18rem");
    let forecastCardHeader = document.createElement("div");
    forecastCardHeader.setAttribute("class", "card-header");
    var forecastCardHeaderText = document.createTextNode(
      moment().add(i, "days").format("MMMM Do YYYY")
    );
    forecastCardHeader.appendChild(forecastCardHeaderText);
    forecastCard.appendChild(forecastCardHeader);
    var forecastCardBodyDiv = document.createElement("div");
    //emojii
    let forecastCardEmojii = document.createElement("p");
    forecastCardEmojii.setAttribute("class", "card-text");
    var forecastCardEmojiiText = document.createElement("i");
    forecastCardEmojiiText.setAttribute(
      "class",
      weatherEmojiiPicker(cityWeatherObject.daily[i].weather[0].main)
    );
    forecastCardEmojii.appendChild(forecastCardEmojiiText);
    forecastCardBodyDiv.appendChild(forecastCardEmojii);
    //temperature
    let forecastCardTemp = document.createElement("p");
    forecastCardTemp.setAttribute("class", "card-text");
    var forecastCardTempText = document.createTextNode(
      "Temperature: " + cityWeatherObject.daily[i].temp.day + "°F"
    );
    forecastCardTemp.appendChild(forecastCardTempText);
    forecastCardBodyDiv.appendChild(forecastCardTemp);
    //humidity
    let forecastCardHumidity = document.createElement("p");
    forecastCardHumidity.setAttribute("class", "card-text");
    var forecastCardHumidityText = document.createTextNode(
      "Humidity: " + cityWeatherObject.daily[i].humidity + "%"
    );
    forecastCardHumidity.appendChild(forecastCardHumidityText);
    forecastCardBodyDiv.appendChild(forecastCardHumidity);
    //

    //append all
    forecastCard.appendChild(forecastCardBodyDiv);
    cardHomeRow.appendChild(forecastCard);
  }
};
//Switch statement used to select the correct emojii
weatherEmojiiPicker = (weatherStatus) => {
  switch (weatherStatus) {
    case "Clouds":
      return "fas fa-cloud";
    case "Clear":
      return "far fa-sun";
    case "Rain":
      return "fas fa-cloud-rain";
    case "Snow":
      return "fas fa-snowflake";
  }
};
