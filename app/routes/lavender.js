import Ember from 'ember';


//todo id and comments
export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('todo', params.task_id);
	},
});
