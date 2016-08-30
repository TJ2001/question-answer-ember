import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    updateQuestionShow() {
      this.set('updateQuestion', true);
    },
    update(question) {
      var params = {
        screenName: this.get('screenName'),
        query: this.get('query'),
        content: this.get('content'),
      };
      this.set('updateQuestion', false);
      this.sendAction('update', question, params);
    }
  }
});
