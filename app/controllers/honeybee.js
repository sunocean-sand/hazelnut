import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],

	isEditing: false,

    todoSorting: ['idx:asc'],
    todosort: Ember.computed.sort('model.todos.@each.idx', 'todoSorting'),




	actions: {
		editTitle: function() {
			this.set('isEditing', true);
		},

		updateTitle: function() {
			this.set('isEditing', false);

			return true;
		},
	}

});
