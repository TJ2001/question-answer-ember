import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    askQuestionFormShow() {
      this.set('askQuestion', true);
    },

    askNewQuestion() {
      var params = {
        screenName: this.get('screenName'),
        avatar: this.get('avatar'),
        query: this.get('query'),
        content: this.get('content'),
      };
      this.set('askQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
