import Ember from 'ember';

export default Ember.Component.extend({

	model: function(params) {
		return Ember.RSVP.hash({
		  list: this.store.find('list', params.list_id),
		  list_id: params.list_id,
		  silly: 'TESTING'
		});
	},

	isEditing: false,


	actions: {
		createList: function() {
		//0 check authentication
		/*
			if (session.isAuthenticated(false)) {
				return this.send('openModal');
			} else {
				//continue action
			}
		*/
		//1
			var newListTitle = this.controllerFor('lists').get('newListTitle');
			var user = this.controllerFor('application').get('model');
 
			if (Ember.isBlank(newListTitle)) { return false; }
 
		//2
			var list = this.store.createRecord('list', {
				title: newListTitle,
				user: user,
			});

		//3
			this.controllerFor('lists').set('newListTitle', '');
 

 			var _this=this;
		//4
			list.save().then(function(list) {
				user.get('list').addObject(list);
				user.save().then(function(success){
				  console.log('success', success);
					_this.transitionTo('lists.show', list.id);
				}, function(fail){
				  console.log('fail', fail);
				});
			});
		//5
			
 
		},


		deleteList: function() {
			var list = this.modelFor(this.routeName);
			list.destroyRecord();

			this.transitionTo('lists');
		},


		updateTitle: function() {
			var model = this.modelFor(this.routeName);

			if (Ember.isBlank(model.get('title'))) {
				model.rollback();
			}
			else {
				model.save();
			}
		},
	}
});
