import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		//it is counting helper, but adding user id instead of uid
		//unable to get user picture
		countMe: function() {

			//authentication

			var session = this.get('session');

			var ref = this.get('session.ref');
			var uid = this.get('session.uid');


			

			if (session.isAuthenticated) {

				var todo= this.get('todo');

                //Change button color and text
                //cosmetic hack

                
                $(".btn-countin").css("background-color","#FF66CC");
                $(".btn-countin").find(".source-code").text("I'm in!");

				var store = this.get('store');

				ref.child('helpers').push({
					todo: todo.id,
					timestamp: Firebase.ServerValue.TIMESTAMP,
					user: uid,
					unprocessed: true
				});




/*
				var helper = store.createRecord('helper', {
					user: user,
					todo: todo,
					timestamp: new Date()
				});

				helper.save().then(function(helper) {
					user.get('helper').addObject(helper);
					user.save();
					todo.get('helper').addObject(helper);
					todo.save();
				});
*/

			} else {

				var _this=this;

				_this.sendAction('openModal');

			}

		},
	}
});
