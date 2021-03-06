Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var newPokemon = new Pokedex.Models.Pokemon(attrs);
  newPokemon.save([], {
    success: (function(){
      this.pokes.push(newPokemon);
      this.addPokemonToList(newPokemon);
      callback(newPokemon);
      _clear(this.$newPoke);
    }).bind(this)
  });
  
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  event.preventDefault();
  var pokemonData = $(event.target).serializeJSON();
  this.createPokemon(pokemonData, this.renderPokemonDetail.bind(this));
};

var _clear = function(form){
  var $input = form.find("input");
  debugger
  $input.val(" ");
}