//models/list.js

import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	timestamp: DS.attr('date'),

	todos: DS.hasMany('todo', {async: true}),
	user: DS.belongsTo('user', {async: true})
});