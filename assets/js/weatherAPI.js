//I hate showing the API Key like this :(
var APIkey = "c455cbf9b07384ad36426ce6be7d843b";
var weatherUnits = "units=imperial";

//handles bad responses from the API
function handleErrors(response) {
  if (!response.ok) {
    alert("Unknown City, please search again.");
    throw Error(response.statusText);
  }
  return response;
}

//Grabs todays weather
queryTodaysWeather = (input) => {
  var cityname = input;
  var currentWeatherEndpoint = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&${weatherUnits}`;
  fetch(currentWeatherEndpoint)
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => queryFiveDayForcast(cityname, data));
};
//Uses the response from todays weather to send a follow up query for the next 5 days weather
queryFiveDayForcast = (inputCity, cityObject) => {
  let lat = cityObject.coord.lat;
  let lon = cityObject.coord.lon;
  var forecastWeatherEndpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=${APIkey}&${weatherUnits}`;
  fetch(forecastWeatherEndpoint)
    .then(handleErrors)
    .then((response) => response.json())
    //Passes the final response to the aside Generator to kick off the chain
    .then((data) => asideGenerator(inputCity, JSON.stringify(data)));
};
