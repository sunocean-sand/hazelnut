import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('list', params.stack_id);
	},
});
