import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],
/*
	commentsSorting: ['timestamp:desc'],
	comments: Ember.computed.sort('model.@each.comment', 'commentsSorting'),
*/

/*
	sortedBySortByContent: function() {
    	return this.get('model.comment').sortBy('timestamp').reverse();
  }.property('model.comment.@each'),
*/

});
