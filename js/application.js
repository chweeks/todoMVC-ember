window.Pokedex = Ember.Application.create();

Pokedex.ApplicationAdapter = DS.FixtureAdapter.extend();

Pokedex.Item = Ember.Object.extend();

Pokedex.Item.reopenClass({
  all: function() {
    return $.getJSON("http://pokeapi.co/api/v1/pokemon/1/").then(function(response) {
      return response
    });
  }
});
