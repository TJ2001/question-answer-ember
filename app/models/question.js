import DS from 'ember-data';

export default DS.Model.extend({
  screenName: DS.attr(),
  avatar: DS.attr(),
  query: DS.attr(),
  content: DS.attr(),
  answers: DS.hasMany('answer', {async:true})
});
