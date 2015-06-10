import Ember from 'ember';

export default Ember.Component.extend({
	actions: {

		createComment: function() {

			var newComment = this.controllerFor(this.routeName).get('newComment');
			var user = this.controllerFor('application').get('model');

			if (Ember.isBlank(newComment)) {return false;}

			var todo = this.modelFor(this.routeName);

			var comment = this.store.createRecord('comment', {
				message: newComment,
				todo: todo,
				user: user,
			});

			this.controllerFor(this.routeName).set('newComment', '');


			comment.save().then(function(comment) {
				todo.get('comment').addObject(comment);
				todo.save();
				user.get('comment').addObject(comment);
				user.save();
			});
		},
	}
});
