import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ['login-modal'],

	actions: {

		close: function() {
    		this.sendAction('dismiss');
    	},
/*
    	loginFacebook: function() {
    		this.sendAction('loginFacebook');
    	},

    	loginTwitter: function() {
    		this.sendAction('loginTwitter');
    	},
*/
    	login: function() {
    		this.sendAction('login');
    	},
/*
    	createUser: function() {
    		this.sendAction('createUser');
    	},
*/
        createUser: function() {

            var ref = new Firebase("https://nutella.firebaseio.com");

            ref.createUser({
                'email' : this.get('varemail'),
                'password' : this.get('varpassword')

            }, function(error, userData) {
              if (error) {
                console.log("Error creating user:", error);
              } else {
                console.log("Successfully created user account with uid:", userData.uid);
              }
            });

        }


	},

});
