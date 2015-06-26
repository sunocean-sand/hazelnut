import DS from 'ember-data';

export default DS.Model.extend({
	displayName: DS.attr('string'),
	provider: DS.attr('string'),
	email: DS.attr('string'),
	imageThumbUrl: DS.attr('string'),
	location: DS.attr('string'),
	description: DS.attr('string'),

	phone: DS.attr('string'),
	timestamp: DS.attr('date'),

	list: DS.hasMany('list', {async: true}),
	todo: DS.hasMany('todo', {async: true}),
	comment: DS.hasMany('comment', {async: true}),
	helper: DS.hasMany('helper', {async: true}),

	unprocessed: DS.attr('boolean', {defaultValue: true})
});
