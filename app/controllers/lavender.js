import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],

	commentsSorting: ['timestamp:desc'],
	commentSort: Ember.computed.sort('model.comment.@each.timestamp', 'commentsSorting'),

/*
	sortedBySortByContent: function() {
    	return this.get('model.comment').sortBy('timestamp').reverse();
  }.property('model.comment.@each'),
*/

});
