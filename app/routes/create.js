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


			var oauthUser = this.get('session.oauthUser');
			console.log(oauthUser);

			




			if (session.isAuthenticated) {

			//list saving with todos
			//var user = this.controllerFor('application').get('model');

			var list = this.get('controller.model');

			var listRef = ref.child('lists');

				listRef.child(list.id).child('todos').once('value', function(allTodosSnapshot) {
					allTodosSnapshot.forEach(function(todoSnapshot) {
						var key = todoSnapshot.key(); //firebase id
						console.log(key);

						var childData = todoSnapshot.val();
						console.log(childData.title);
					});
				});


			list.save().then(function(list) {
				  list.get('todos').then(function(todos){
				  	todos.forEach(function(todo){
				  		todo.save();
				  	});
				  });
				});


			var userInstance = this.store.get('users', oauthUser).then(function() {
					userInstance.get('list').addObject(list);
					userInstance.save();
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
