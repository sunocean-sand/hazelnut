import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('list');
	},

	actions: {
		createList: function() {
		//0 check authentication
			var session = this.get('session');

			if (session.isAuthenticated) {

				var newListTitle = this.controllerFor('main').get('newListTitle');
				var user = this.controllerFor('application').get('model');
	 
				if (Ember.isBlank(newListTitle)) { return false; }
	 
			//2
				var list = this.store.createRecord('list', {
					title: newListTitle,
					user: user,
				});

			//3
				this.controllerFor('main').set('newListTitle', '');
	 

	 			var _this=this;
			//4
				list.save().then(function(list) {
					user.get('list').addObject(list);
					user.save().then(function(success){
					  console.log('success', success);
						_this.transitionTo('honeybee', list.id);
					}, function(fail){
					  console.log('fail', fail);
					});
				});



			} else {
				//open login modal
				this.transitionTo({queryParams: {foo: true}});
			}
			
			
 
		}
	}
});
