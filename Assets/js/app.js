//this is used to delete all childs from inside of a div to return it to blank so something else can be rendered.
clearOutputDiv = (selector) => {
  var div = document.querySelector(selector);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};

uvIndexHighlighting = (uv) => {
  if (uv >= 11) {
    return "purple";
  } else if (uv >= 8) {
    return "red";
  } else if (uv >= 6) {
    return "orange";
  } else if (uv >= 3) {
    return "yellow";
  } else {
    return "green";
  }
};
