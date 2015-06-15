import Ember from 'ember';

export default Ember.Component.extend({
	isEditing: false,


	isCompleted: function(key, value){
		var model = this.get('model');

		if (value === undefined) {
			return model.get('isCompleted');
		}
		else {
			model.set('isCompleted', value);
			model.save();
			return value;
		}
	}.property('model.isCompleted'),

	
	actions: {

		deleteTodo: function(id) {
			var list = this.modelFor(this.routeName);

			this.store.find('todo', id).then(function(todo) {
				list.get('todos').removeObject(todo);
				list.save();

				todo.destroyRecord();
			});
		},

		updateTitle: function() {
			var model = this.modelFor(this.routeName);

			if (Ember.isBlank(model.get('title'))) {
				model.rollback();
			}
			else {
				model.save();
			}
		},
	},
});
