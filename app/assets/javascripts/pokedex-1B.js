Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var $detailDiv = $('div.pokemon-detail');
  var $toys = $("<ul>").addClass("toys");
  
  var view = this;
  pokemon.fetch({
    success: (function (tPokemon) {
      $detailDiv.empty();
      
      var attributes = tPokemon.attributes;
       for(property in attributes) {
          
          if (property === 'image_url') {
            $('<img>').attr("src", attributes[property]).prependTo($detailDiv);
          } else {
            $('<p>').html(property + ": " + attributes[property]).appendTo($detailDiv);
          }
       }

       $detailDiv.append($toys);
       pokemon.toys().each(function(toy){
         view.addToyToList(toy);
       })
    })
  })

  
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var id = $(event.target).data();
  var poke = this.pokes.find(id);
  this.renderPokemonDetail(poke);
};
