import DS from 'ember-data';

export default DS.Model.extend({
	message: DS.attr('string'),
	timestamp: DS.attr('date'),

	user: DS.belongsTo('user', {async: true}),
	todo: DS.belongsTo('todo', {async: true}),

	unprocessed: DS.attr('boolean', {defaultValue: true})
});
