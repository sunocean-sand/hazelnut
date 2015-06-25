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
          dismiss: "dismiss"
      }
	});

  this.route('main', {path: '/'});
  this.route('honeybee', {path: '/:stack_id'});
  this.route('lavender', {path: '/:stack_id/:task_id'});
  this.route('manage', {path: '/:stack_id/manage'});

  this.route('profile');
  this.route('create');
});