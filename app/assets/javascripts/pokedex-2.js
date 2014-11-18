Pokedex.RootView.prototype.addToyToList = function (toy) {
  var $li = $("<li>");
  $li.html(toy.name  + " " + toy.happiness + " " + toy.price);
  $('ul.toys').append($li);
};

Pokedex.RootView.prototype.renderToyDetail = function (toy) { // III
};

Pokedex.RootView.prototype.selectToyFromList = function (event) {
};
