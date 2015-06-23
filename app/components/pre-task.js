import Ember from 'ember';

export default Ember.Component.extend({

	actions: {

		//all these actions should target data that's not saved yet
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
	}


});
