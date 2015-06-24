import Ember from 'ember';


//todo id and comments
export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('todo', params.task_id);
	},

	actions: {

		createComment: function() {

			var session = this.get('session');

			if (session.isAuthenticated) {

				var newComment = this.controllerFor(this.routeName).get('newComment');
				var user = this.controllerFor('application').get('model');

				if (Ember.isBlank(newComment)) {return false;}

				var todo = this.modelFor(this.routeName);

				var comment = this.store.createRecord('comment', {
					message: newComment,
					todo: todo,
					user: user,
					timestamp: new Date()
				});

				this.controllerFor(this.routeName).set('newComment', '');


				comment.save().then(function(comment) {
					todo.get('comment').addObject(comment);
					todo.save();
					user.get('comment').addObject(comment);
					user.save();
				});





			} else {
				this.transitionTo({queryParams: {foo: true}});
			}

		},



		openModal: function() {
			console.log('transition');
			this.transitionTo({queryParams: {foo: true}});
		}


	}
});
