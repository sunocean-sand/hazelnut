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

			var ref = this.get('session.ref');
			var uid = this.get('session.uid');

			var todo = this.get('controller.model.todo');


			if (session.isAuthenticated) {

			//list saving with todos
			//var user = this.controllerFor('application').get('model');

			var list = this.get('controller.model');



			list.save().then(function(list) {

				//ref.child('lists').push({
				//	user: uid
				//});
				  list.get('todos').then(function(todos){
				  	todos.forEach(function(todo){
				  		todo.save();
				  	});
				  });
				});


			ref.child('lists').push({
				todo: this.get('controller.model.todo')
			});


			ref.child('lists').child(list.id).push({
				user: uid
			});


			var _this=this;	
			_this.transitionTo('honeybee', list);



			} else {
				//open login modal
				this.transitionTo({queryParams: {foo: true}});
			}
		},


	}




});
