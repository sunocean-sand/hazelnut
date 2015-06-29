import Ember from 'ember';

export default Ember.Controller.extend({
	
	queryParams: 'foo',
  	salutation: null,
  	person: null,
  	modalMessage: "bound text for modal",
	
	actions: {

	        login: function() {
	            this.get('session').authenticate('authenticator:firebase', {
	                'email': this.get('email'),
	                'password': this.get('password')
	            }).then(function() {
	                this.transitionToRoute('index');
	            }.bind(this));
	        },

	        logout: function() {
	            this.get('session').invalidate().then(function() {
	                this.transitionToRoute('login');
	            }.bind(this));
	        },

	        createUser: function() {

		        var ref = new Firebase("https://nutella.firebaseio.com");

				ref.createUser({
				  email    : this.get('email'),
				  password : this.get('password')
				}, function(error, userData) {
				  if (error) {
				    console.log("Error creating user:", error);
				  } else {
				    console.log("Successfully created user account with uid:", userData.uid);
				  }
				});

			}

	}

});
