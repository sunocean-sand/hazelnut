import Ember from 'ember';


export default Ember.Route.extend({

	model: function() {
		var user = this.get('session.uid');
		if (user) {
			return this.store.find('user', user);
		} else  {
			return null;
		}
	},


	actions: {

		login: function() {
			var controller = this;
			controller.get("session").login();
		},

		loginFacebook: function() {
			var controller = this;
				controller.get("session").loginFacebook().then(function(user) {
					console.log(user);
				});

			var _this=this;
			_this.sendAction('dismiss');
		},

		loginTwitter: function() {
			var controller = this;
				controller.get("session").loginTwitter().then(function(user) {
					console.log(user);
				});

			var _this = this;
			_this.sendAction('dismiss');
		},


		logout: function() {
			this.get('session').logout();
		},

		dismiss: function() {
    		this.send('dismiss');
    	},

		createUser: function() {
			var controller = this;
			controller.get('session').createUser();
			alert(this.get('name'));
			/*.then(function(user) {
				}, function() {
				});*/
		},

/*
		openModal: function(modal) {
	      this.render(modal, {
	        into: 'application',
	        outlet: 'modal'
	      });
	      return Ember.run.schedule('afterRender', function() {
	        Ember.$('.modal').modal('show');
	      });
	    },

		closeModal: function() {
			Ember.$('#modal-dialog').removeClass('overlay');
	      	Ember.$('.modal').modal('toggle');
	      //Ember.$('.overlay').remove();
	      return this.disconnectOutlet({
	        outlet: 'modal',
	        parentView: 'application'
	      });
	    },
	   */


//ember-cli-cordova
	    back: function() {
     		history.back();
   		},

	    openLink: function(url) {
	      window.open(url, '_system');
	    },
	}
});
