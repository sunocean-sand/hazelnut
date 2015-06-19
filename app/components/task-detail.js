import Ember from 'ember';

export default Ember.Component.extend({

	isEditing: false,

	actions: {

		editDetail: function() {
			this.set('isEditing', true);
		},

		updateDetail: function() {

			var store = this.get('store');
			var model = this.get('todo');

			if (Ember.isBlank(model.get('detail'))) {
				model.rollback();
			}
			else {
				model.save();
				this.set('isEditing', false);
			}
		},
	}
	
});
