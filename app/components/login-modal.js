import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ['login-modal'],

	actions: {

		gotIt: function() {
    		this.sendAction('dismiss');
    	},

    	change: function() {
    		this.sendAction('changeSalutation');
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
