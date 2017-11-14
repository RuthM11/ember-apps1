import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({

  emailAddress: '',

  message: '',

  isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageValid: Ember.computed.gte('message.length', 5),

  isValid:Ember.computed.and('isEmailValid','isMessageValid'),

  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveInvitation() {
      alert(`Saving of the following email address: ${this.get('emailAddress')} and message: ${this.get('message')}`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon`);
      this.set('emailAddress', '');
      this.set('message','');
    }
  }

});
