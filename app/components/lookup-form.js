import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup() {
      var params = {
        zip: this.get('zip')
      };
      this.sendAction('zipLookup', params);
    },
    chamberLookup() {
      var chamber = {
        chamber: this.get('chamber')
      };

      this.sendAction('chamberLookup', chamber);
      }
    }
  });
