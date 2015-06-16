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

		deleteTodo: function() {
			//var list = this.modelFor(this.routeName);

			var store = this.get('store');
			var list = this.get('list');
			var t = this.get('todo');

			this.store.find('todo').then(function(todo) {
				list.get('todos').removeObject(todo);
				list.save();

				t.destroyRecord();

				//need to refresh and not go to stack page
			});
		},

		updateTitle: function() {
			//var model = this.modelFor(this.routeName);

			var store = this.get('store');
			var model = this.get('todo');

			if (Ember.isBlank(model.get('title'))) {
				model.rollback();
			}
			else {
				model.save();
			}
		},


		editTitle: function() {
			this.set('isEditing', true);
		},
	},
});
