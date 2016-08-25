import Ember from 'ember';

export default Ember.Route.extend({
  question: this.store.findAll('question'),
});
