import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('lists', {path: '/'}, function() {
    this.route('show', {path: 'todos/:list_id'} );
  });
  this.route('todo', {path: 'todos/:todo_id'});
  this.route('details', {path: 'todos/:todo_id/details'});

  this.route('main', {path: 'stacks'});
  this.route('honeybee', {path: 'stacks/:stack_id'});
  this.route('lavender', {path: 'stacks/:stack_id/:task_id'});
  this.route('manage', {path: 'stacks/:stack_id/manage'});
  this.route('profile');
});