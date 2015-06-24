import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		//it is counting helper, but adding user id instead of uid
		//unable to get user picture
		countMe: function() {

			//authentication

			var session = this.get('session');

			if (session.isAuthenticated) {

				var user= this.get('user');

				var todo= this.get('todo');

				var store = this.get('store');

				var helper = store.createRecord('helper', {
					user: user,
					todo: todo,
				});

				helper.save().then(function(helper) {
					user.get('helper').addObject(helper);
					user.save();
					todo.get('helper').addObject(helper);
					todo.save();
				});

			} else {
				this.transitionTo({queryParams: {foo: true}});
			}

		},
	}
});
