import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      question: this.store.findAll('question')
    });
  },

  actions: {
    saveQuestion2(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    deleteQuestion(question) {
      question.destroyRecord();
    }
  }
});
