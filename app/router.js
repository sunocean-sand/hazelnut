import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.modal('login-modal', {
      withParams: 'foo',
      otherParams: {
          modalMessage: "message"
      },
      actions: {
          changeSalutation: "changeSalutation",
          loginFacebook: "loginFacebook",
          loginTwitter: "loginTwitter",
          login: "login",
          createUser: "createUser",
      }
	});

  this.route('main', {path: '/'});
  this.route('honeybee', {path: '/:list_id'});
  this.route('lavender', {path: '/:list_id/:todo_id'});
  this.route('manage', {path: '/:list_id/manage'});

  this.route('profile');
  this.route('create');
});