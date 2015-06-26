import Ember from 'ember';
//import ResetScroll from '../mixins/reset-scroll/';


export default Ember.Route.extend(/*ResetScroll,*/ {
/*
	activate: function() {
		this._super.apply(this, arguments);
	},
	*/

	model: function(params) {
		return this.store.find('list', params.list_id);
	},

	actions: {

		createTodo: function() {

			//just some examples to see what is defined
			var session = this.get('session');
			var currentUser = this.get('session.currentUser');

			console.log(session.uid); //provider:id
			console.log(session.user); //object with all the info
			console.log(session.ref); //firebase
			console.log(this.get('session').uid);
			console.log(currentUser.uid);
			//return this.store.find('user', this.get('session').uid);//provider:id

			var ref = this.get('session.ref');// need it
			var uid = this.get('session.uid');// need it

			console.log(ref.child('users').child(uid).child('todos'));
			console.log(ref.child('users').child(uid));



			if (session.isAuthenticated) {


				var newTodoTitle = this.controllerFor(this.routeName).get('newTodoTitle');

				if (Ember.isBlank(newTodoTitle)) {return false;}

				var list = this.modelFor(this.routeName);

/*
				var todo = this.store.createRecord('todo', {
					title: newTodoTitle,
					list: list,
					user: session.currentUser.uid,
					timestamp: new Date()
				});
*/
				var _this=this;

				var todoRef = ref.child('todos');

				var todoCallback = function() {

					var todoID = newTodoRef.key();
					console.log(todoID);

					var listRef = ref.child('lists').child(list.id).child('todos');

					listRef.update({
						todo: todoID
					});

				}




				var newTodoRef = todoRef.push({
					title: newTodoTitle,
					timestamp: Firebase.ServerValue.TIMESTAMP,
					user: uid,
					list: list.id,
					unprocessed: true,
					isCompleted: false,
					idx: 0,

				}, function(error) {

				todoCallback();
				console.log(error);

			 	});




				/*
				var todoID = todoRef.key();
				
				var listRef = ref.child('lists').child(list.id).child(todos);

					listRef.push({
						todo: todoID
					});
*/
			

				this.controllerFor(this.routeName).set('newTodoTitle', '');
/*
				var _this=this;

				todo.save().then(function(todo) {
					list.get('todos').addObject(todo);
					list.save();
					user.get('todos').addObject(todo);
					user.save().then(function(success) {
						console.log('success', success);
						_this.transitionTo('lavender', todo.id);
					}, function(fail) {
						console.log('fail', fail);
					});
				});
*/

			} else {
				this.transitionTo({queryParams: {foo: true}});
			}

		},

		

		go: function() {
			console.log('transition');
			this.transitionTo('main');
		},



		openModal: function() {
			console.log('transition');
			this.transitionTo({queryParams: {foo: true}});
		}



	}
});
