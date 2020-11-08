//Function to generate the HTML for the cities aside
var asideUL = document.querySelector("#prev-search-aside");

function asideGenerator(city, data) {
  localStorage.setItem(city, data);
  var searchedCities = [];
  //Grabs all items from localStorage
  for (var i in localStorage) {
    if (localStorage.getItem(i) != null) {
      val = localStorage.getItem(i);
      searchedCities.push([i, val]);
    }
  }
  //Generates the results for all items in localstorage
  generatePreviousSearchAside = (item, index) => {
    var mainLi = document.createElement("li");
    mainLi.setAttribute("class", "list-group-item");
    mainLi.setAttribute("id", `${item[0]}Btn`);
    var mainLiText = document.createTextNode(`${item[0]}`);
    mainLi.appendChild(mainLiText);
    asideUL.appendChild(mainLi);
  };
  //makes all the aside bars clickable
  generatePreviousSearchAsideButtons = (item, index) => {
    var prevSearchBtn = document.getElementById(`${item[0]}Btn`);
    prevSearchBtn.addEventListener("click", (event) => {
      event.preventDefault();
      generateJumbotron(JSON.parse(localStorage.getItem(item[0])), item[0]);
    });
  };
  //clears the previous output so there is not an infinite stack
  clearOutputDiv("#prev-search-aside");
  searchedCities.forEach(generatePreviousSearchAside);
  searchedCities.forEach(generatePreviousSearchAsideButtons);
  //passes the information it has to the next function in the chain.
  generateJumbotron(JSON.parse(data), city);
}
asideGenerator();
