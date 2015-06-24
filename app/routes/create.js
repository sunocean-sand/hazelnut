import Ember from 'ember';

export default Ember.Route.extend({

	setupController: function(controller, model) {
		controller.set('model', model);
	},


	model: function() {
		return this.store.createRecord('list');
	},


	actions: {

		createStack: function() {

			//check for authentication
			var session = this.get('session');

			if (session.isAuthenticated) {

			//list saving with todos
			var user = this.controllerFor('application').get('model');

			var list = this.get('controller.model');

				list.save().then(function(list) {

				  list.get('todos').then(function(todos){
				  	todos.forEach(function(todo){
				  		todo.save();
				  	});
				  });
				});

			var _this=this;

				user.get('list').addObject(list);
				user.save().then(function(success){
					console.log('success', success);
						_this.transitionTo('honeybee', list);
					}, function(fail){
					  console.log('fail', fail);
					});



			} else {
				//open login modal
				this.transitionTo({queryParams: {foo: true}});
			}
		},


	}




});
