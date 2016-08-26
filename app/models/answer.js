import DS from 'ember-data';

export default DS.Model.extend({
  screenName: DS.attr(),
  avatar: DS.attr(),
  question: DS.belongsTo('question', { async: true }),
  solution: DS.attr(),
});
