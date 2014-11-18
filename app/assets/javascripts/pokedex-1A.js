Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var $li = $("<li class=\"poke-list-item\">");
  $li.html(pokemon.get("name") + " " + pokemon.get("poke_type"));
  $li.attr("data-id", pokemon.id);
  this.$pokeList.prepend($li);
};

Pokedex.RootView.prototype.refreshPokemon = function (callback) {
  var view = this;
  view.pokes.fetch({
    success: (function () {
      view.pokes.forEach(function (pokemon) {
        view.addPokemonToList(pokemon);
      })
    })
  })
};
