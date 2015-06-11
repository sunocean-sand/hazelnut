import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  //this.resource('lists', {path: '/'}, function() {
  //  this.route('show', {path: 'todos/:list_id'} );
  //});
  //this.route('todo', {path: 'todos/:todo_id'});
  //this.route('details', {path: 'todos/:todo_id/details'});

  this.route('main', {path: '/'});
  this.route('honeybee', {path: '/:stack_id'});
  this.route('lavender', {path: '/:stack_id/:task_id'});
  this.route('manage', {path: '/:stack_id/manage'});
  this.route('profile');
});