window.Pokedex = Ember.Application.create();

Pokedex.ApplicationAdapter = DS.FixtureAdapter.extend();

Pokedex.Item = Ember.Object.extend();

Pokedex.Item.reopenClass({
  bulbasaur: function() {
    return $.getJSON("http://pokeapi.co/api/v1/pokemon/1/").then(function(response) {
      return response
    });
  },
  ivysaur: function() {
    return $.getJSON("http://pokeapi.co/api/v1/pokemon/2/").then(function(response) {
      return response
    });
  },
  venusaur: function() {
    return $.getJSON("http://pokeapi.co/api/v1/pokemon/3/").then(function(response) {
      return response
    });
  },
  charmander: function() {
    return $.getJSON("http://pokeapi.co/api/v1/pokemon/4/").then(function(response) {
      return response
    });
  },
  charmeleon: function() {
    return $.getJSON("http://pokeapi.co/api/v1/pokemon/5/").then(function(response) {
      return response
    });
  },
  charizard: function() {
    return $.getJSON("http://pokeapi.co/api/v1/pokemon/6/").then(function(response) {
      return response
    });
  },
  squirtle: function() {
    return $.getJSON("http://pokeapi.co/api/v1/pokemon/7/").then(function(response) {
      return response
    });
  },
  wartortle: function() {
    return $.getJSON("http://pokeapi.co/api/v1/pokemon/8/").then(function(response) {
      return response
    });
  },
  blastoise: function() {
    return $.getJSON("http://pokeapi.co/api/v1/pokemon/9/").then(function(response) {
      return response
    });
  },
  caterpie: function() {
    return $.getJSON("http://pokeapi.co/api/v1/pokemon/10/").then(function(response) {
      return response
    });
  },
  metapod: function() {
    return $.getJSON("http://pokeapi.co/api/v1/pokemon/11/").then(function(response) {
      return response
    });
  },
  butterfree: function() {
    return $.getJSON("http://pokeapi.co/api/v1/pokemon/12/").then(function(response) {
      return response
    });
  },
  weedle: function() {
    return $.getJSON("http://pokeapi.co/api/v1/pokemon/13/").then(function(response) {
      return response
    });
  },
  kakuna: function() {
    return $.getJSON("http://pokeapi.co/api/v1/pokemon/14/").then(function(response) {
      return response
    });
  },
  beedrill: function() {
    return $.getJSON("http://pokeapi.co/api/v1/pokemon/15/").then(function(response) {
      return response
    });
  },
  pidgey: function() {
    return $.getJSON("http://pokeapi.co/api/v1/pokemon/16/").then(function(response) {
      return response
    });
  },
});
