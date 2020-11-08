//event listener for the search button. On search kicks off the API call and renders the divs
var submitSearchBtn = document.querySelector("#buttonInput");
submitSearchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var userSearchInput = document.querySelector("#inputText");
  queryTodaysWeather(userSearchInput.value);
});
