Pokedex.Router.map(function() {
  this.resource('pokedex', { path: '/' }, function() {
  });
});

Pokedex.PokedexRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      bulbasaur: Pokedex.Item.all()
    });
  }
});
