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
        avatar: this.get('avatar'),
        solution: this.get('solution'),
      };
      this.set('answerQuestion', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
