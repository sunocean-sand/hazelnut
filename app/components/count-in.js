import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		//it is counting helper, but adding user id instead of uid
		//unable to get user picture
		countMe: function() {

			var user = this.controllerFor('application').get('model');
			var todo = this.modelFor(this.routeName);
			//var todo = this.store.find('todo', params.todo_id);
			//var todo = this.store.find('todo', id);
			//var todo = this.controllerFor('details').get('model');

			var helper = this.store.createRecord('helper', {
				user: user,
				todo: todo,
			});

			helper.save().then(function(helper) {
				user.get('helper').addObject(helper);
				user.save();
				todo.get('helper').addObject(helper);
				todo.save();
			});

		},
	}
});
