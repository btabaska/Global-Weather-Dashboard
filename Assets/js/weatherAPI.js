var APIkey = "c455cbf9b07384ad36426ce6be7d843b";
var weatherUnits = "units=imperial";

function handleErrors(response) {
  if (!response.ok) {
    alert("bad city, please search again.");
    throw Error(response.statusText);
  }
  return response;
}

queryTodaysWeather = (input) => {
  var cityname = input;
  var currentWeatherEndpoint = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&${weatherUnits}`;
  fetch(currentWeatherEndpoint)
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => localStorage.setItem(cityname, JSON.stringify(data)))
    .then(queryFiveDayForcast(cityname));
};

queryFiveDayForcast = (inputCity) => {
  var cityObject = JSON.parse(localStorage.getItem(inputCity));
  let lat = cityObject.coord.lat;
  let lon = cityObject.coord.lon;
  console.log("ff");
  var forecastWeatherEndpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=${APIkey}&${weatherUnits}`;
  fetch(forecastWeatherEndpoint)
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => localStorage.setItem(inputCity, JSON.stringify(data)))
    .then((data) => console.log(data));
};

queryTodaysWeather("San Francisco");
