import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ['login-modal'],

	actions: {

		dismiss: function() {
    		this.sendAction('dismiss');
    	},

    	loginFacebook: function() {
    		this.sendAction('loginFacebook');
    	},

    	loginTwitter: function() {
    		this.sendAction('loginTwitter');
    	},

    	login: function() {
    		this.sendAction('login');
    	},

    	createUser: function() {
    		this.sendAction('createUser');
    	},

	},

});
