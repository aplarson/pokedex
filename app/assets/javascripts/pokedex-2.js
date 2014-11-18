Pokedex.RootView.prototype.addToyToList = function (toy) {
  var $li = $("<li>").data('toy-id', toy.get("id")).data('pokemon-id', toy.get("pokemon_id"));
  $li.html(toy.attributes.name  + " " + toy.attributes.happiness + " " + toy.attributes.price);
  $('ul.toys').append($li);
};

Pokedex.RootView.prototype.renderToyDetail = function (toy) { // III
  this.$toyDetail.empty();
  var $detail = $("<div>").addClass("detail");
  var att = toy.attributes;
  this.$toyDetail.append($detail)

  for(property in att){
    if(property === "image_url"){
      $detail.prepend($("<img>").attr('src', att[property]));
    } else {
      $detail.append($("<li>").html(att[property]));
    }
  }
  
 
};

Pokedex.RootView.prototype.selectToyFromList = function (event) {
  var toyId = $(event.target).data('toy-id');
  var pokemonId  = $(event.target).data('pokemon-id');
  var pokemon = this.pokes.find({ 'id': pokemonId });
  var toy = pokemon.toys().find({ 'id': toyId });

  this.renderToyDetail(toy);
};
