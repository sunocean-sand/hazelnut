import Ember from 'ember';

export default Ember.Component.extend({

	isEditing: false,

	actions: {

		deleteList: function() {

			var store = this.get('store');
			var list = this.get('list');
			
			list.destroyRecord();

			//this.transitionTo('main');
			this.sendAction('go');
		},

		updateTitle: function() {
			//var model = this.modelFor(this.routeName);
			
			var store = this.get('store');
			var list = this.get('list');

			if (Ember.isBlank(list.get('title'))) {
				list.rollback();
			}
			else {
				list.save();
				this.set('isEditing', false);
			}
		},

		editTitle: function() {
			this.set('isEditing', true);
		},
	}

});
