import Ember from 'ember';


export default Ember.Route.extend({
  createUUID: function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  },

/*
	model: function() {
		var user = this.get('session.user');
		//returns everyones info

		return this.store.find('user');

		var session = this.get('session');

		console.log(session.uid);
		//returns the actually logged in uid with provider name

		//this.get("session").then(function(user) {

		if (user) {
			return this.store.find('user', session.uid);

		} else  {
			return null;
		}
	},
*/

	actions: {


		login: function() {
			var controller = this;
			controller.get("session").login();
		},

		loginFacebook: function() {
			var controller = this;
				controller.get("session").loginFacebook().then(function(user) {
          var generator = controller.get("createUUID");
          var uuid = generator();

          var userObj = {
            id: uuid,
            provider: user.provider,
            displayName: user.facebook.displayName,
            email: user.facebook.email,
            imageThumbUrl: user.facebook.cachedUserProfile.picture.data.url,
            location: user.facebook.cachedUserProfile.locale,
            timestamp: new Date()
          };

          var session = controller.get("session");
          session.oauthUser = userObj;

          var u1 = controller.store.createRecord('user', userObj);

          u1.save();


          window.history.back();

				});

			var _this=this;
			_this.sendAction('dismiss');
		},

		loginTwitter: function() {
			var controller = this;
				controller.get("session").loginTwitter().then(function(user) {
          var generator = controller.get("createUUID");
          var uuid = generator();

          var userObj = {
            id: uuid,
            provider: user.provider,
            displayName: user.twitter.name,
            imageThumbUrl: user.twitter.profile_image_url,
            location: user.twitter.location,
            timestamp: new Date()
          };

          var u1 = controller.store.createRecord('user', userObj);

          u1.save();
          var session = controller.get("session");
          session.oauthUser = userObj;

          window.history.back();

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
