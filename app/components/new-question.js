import Ember from 'ember';

export default Ember.Component.extend({
  askQuestion: false,
  actions: {
    askQuestionFormShow() {
      this.set('askQuestion', true);
    },

    askNewQuestion() {
      var params = {
        screenName: this.get('screenName'),
        query: this.get('query'),
        content: this.get('content'),
      };
      this.set('askQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
