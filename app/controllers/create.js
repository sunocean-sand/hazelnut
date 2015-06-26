import Ember from 'ember';

export default Ember.Controller.extend({

	needs: ['application'],


    todoSorting: ['idx:asc'],
    todosort: Ember.computed.sort('model.todos.@each.idx', 'todoSorting'),


	actions: {

	    addTodo: function() {


	    	var user = this.controllerFor('application').get('model');

	    	var todo = this.store.createRecord('todo', {
	    		title: this.get('model.todos.title'),
	    		user: user,
	    	});
	    	
	    	var list = this.get('model');
	  
	    	list.get('todos').pushObject(todo);  


/*
	    	var session = this.get('session');

			var ref = this.get('session.ref');
			var uid = this.get('session.uid');
*/


	    }
	 }

});
