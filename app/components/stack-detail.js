import Ember from 'ember';

export default Ember.Component.extend({

	isEditing: false,

	actions: {

		deleteList: function() {
			//var list = this.modelFor('honeybee');
			var list = this.store.find('list');
			//var list = this.controllerFor('honeybee').get('model');

			debugger;
			
			list.destroyRecord();

			this.transitionTo('lists');
		},

		updateTitle: function() {
			var model = this.modelFor(this.routeName);
			//var list = this.

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
