import Ember from 'ember';

export default Ember.Controller.extend({
	
	queryParams: 'foo',
  	salutation: null,
  	person: null,
  	modalMessage: "bound text for modal",
	
	/*
  	connectOutlet: function() {
	    window.scrollTo(0, 0);
	    this._super.apply(this, arguments);
  	},
  	*/

});
