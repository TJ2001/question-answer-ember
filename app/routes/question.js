import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    saveAnswer2(params) {
      console.log(params);
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('question');
    }
  }
});
