var submitSearchBtn = document.querySelector("#buttonInput");
submitSearchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var userSearchInput = document.querySelector("#inputText");
  queryTodaysWeather(userSearchInput.value);
});
