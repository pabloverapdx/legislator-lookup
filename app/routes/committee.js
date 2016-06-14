import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url =
    'http://congress.api.sunlightfoundation.com/committees?apikey=8d3dad82b84a4977b8e12890019754e6' + params.chamber;

    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
