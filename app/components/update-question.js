import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestionShow() {
      this.set('updateQuestion', true);
    },
    saveChanges(question) {
      this.set('updateQuestion', false);
      question.save();
    },
  }
});
