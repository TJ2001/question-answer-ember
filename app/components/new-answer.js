import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    answerQuestionShow() {
      this.set('answerQuestion', true);
    },

    answerQuestion() {
      var params = {
        screenName: this.get('screenName'),
        solution: this.get('solution'),
        question: this.get('question')
      };
      this.set('answerQuestion', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
