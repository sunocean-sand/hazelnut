import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return Ember.RSVP.hash({
		  list: this.store.find('list', params.list_id),
		  list_id: params.list_id,
		  silly: 'TESTING'
		})
	},

/*
	renderTemplate: function() {
		this.render('lists/show', { controller: 'lists/show'} );

		this.render('todos', {
			into: 'lists/show',
			outlet: 'todos',
			controller: 'todo'
		});

	},
	*/

	isEditing: false,
});
