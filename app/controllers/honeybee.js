import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],

	isEditing: false,

    todoSorting: ['timestamp:desc'],
    todosort: Ember.computed.sort('model.todos.@each.idx', 'todoSorting'),

	updateSortOrder: function(indexes) {
	    this.beginPropertyChanges();
	    this.todos.forEach(function(item) {
	      var index = indexes[item.get('id')];
	      item.set('idx', index);
	    }, this);
	    this.endPropertyChanges();
	  },


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
