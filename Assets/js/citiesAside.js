var asideUL = document.querySelector("#prev-search-aside");

function asideGenerator(city, data) {
  localStorage.setItem(city, data);
  var searchedCities = [];
  //pulls in all localstorage and appends them to the sortedscores array
  for (var i in localStorage) {
    if (
      localStorage.getItem(i) != null &&
      localStorage.getItem(i) != "undefined"
    ) {
      val = localStorage.getItem(i);
      searchedCities.push([i, val]);
    }
  }
  generatePreviousSearchAside = (item, index) => {
    var mainLi = document.createElement("li");
    mainLi.setAttribute("class", "list-group-item");
    mainLi.setAttribute("id", `${item[0]}Btn`);
    var mainLiText = document.createTextNode(`${item[0]}`);
    mainLi.appendChild(mainLiText);
    asideUL.appendChild(mainLi);
  };

  generatePreviousSearchAsideButtons = (item, index) => {
    var prevSearchBtn = document.getElementById(`${item[0]}Btn`);
    prevSearchBtn.addEventListener("click", (event) => {
      event.preventDefault();
      generateJumbotron(JSON.parse(localStorage.getItem(item[0])), item[0]);
    });
  };
  clearOutputDiv("#prev-search-aside");
  searchedCities.forEach(generatePreviousSearchAside);
  searchedCities.forEach(generatePreviousSearchAsideButtons);
  generateJumbotron(JSON.parse(data), city);
}
asideGenerator();
