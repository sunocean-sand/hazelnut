import Ember from 'ember';



export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('list', params.stack_id);
	},

	actions: {

		createTodo: function() {
			var newTodoTitle = this.controllerFor(this.routeName).get('newTodoTitle');
			var user = this.controllerFor('application').get('model');

			//console.log(this);

			//Ember.Logger.info('user:', user);

			if (Ember.isBlank(newTodoTitle)) {return false;}

			var list = this.modelFor(this.routeName);

			var todo = this.store.createRecord('todo', {
				title: newTodoTitle,
				list: list,
				user: user,
			});

			this.controllerFor(this.routeName).set('newTodoTitle', '');

			todo.save().then(function(todo) {
				list.get('todos').addObject(todo);
				list.save();
				user.get('todos').addObject(todo);
				user.save();
			});

			this.transitionTo('todo');
		},

	}
});
