import Ember from 'ember';

export default Ember.Component.extend({

	isEditing: false,

	actions: {

		editDetail: function() {
			this.set('isEditing', true);
            var model = this.get('todo');
             var flog = this.store.createRecord('log', {
                event: "editDetail:",
                detail: model.get('title'),
                user: this.get('session').uid,
                jsondata: JSON.stringify(model),
                timestamp: new Date(),
            }); flog.save();



		},

		updateDetail: function() {

			var store = this.get('store');
			var model = this.get('todo');

			if (Ember.isBlank(model.get('detail'))) {
				model.rollback();
			}
			else {


             var flog = this.store.createRecord('log', {
                event: "updateDetail",
                detail: model.get('title'),
                jsondata: JSON.stringify(model),
                user: this.get('session').uid,
                timestamp: new Date(),
            }); flog.save();

				model.save();
				this.set('isEditing', false);
			}
		},


		openModal: function() {
			var _this=this;

			_this.sendAction('openModal');
		},
		
	}
	
});
