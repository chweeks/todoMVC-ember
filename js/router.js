Pokedex.Router.map(function() {
  this.resource('pokedex', { path: '/' }, function() {
  });
});

Pokedex.PokedexRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      bulbasaur: Pokedex.Item.bulbasaur(),
      ivysaur: Pokedex.Item.ivysaur(),
      venusaur: Pokedex.Item.venusaur(),
      charmander: Pokedex.Item.charmander(),
      charmeleon: Pokedex.Item.charmeleon(),
      charizard: Pokedex.Item.charizard(),
      squirtle: Pokedex.Item.squirtle(),
      wartortle: Pokedex.Item.wartortle(),
      blastoise: Pokedex.Item.blastoise(),
      caterpie: Pokedex.Item.caterpie(),
      metapod: Pokedex.Item.metapod(),
      butterfree: Pokedex.Item.butterfree(),
      weedle: Pokedex.Item.weedle(),
      kakuna: Pokedex.Item.kakuna(),
      beedrill: Pokedex.Item.beedrill(),
      pidgey: Pokedex.Item.pidgey()
    });
  }
});
