import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],

	commentsSorting: ['timestamp:desc'],
	commentSort: Ember.computed.sort('model.comment.@each.timestamp', 'commentsSorting'),

});
