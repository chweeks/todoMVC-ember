Pokedex.Router.map(function() {
  this.resource('pokedex', { path: '/' }, function() {
  });
});

Pokedex.PokedexRoute = Ember.Route.extend({
  model: function() {
    var picture = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+Pokedex.Item.all().pkdx_id+".png"
    return Pokedex.Item.all();
  }
});
