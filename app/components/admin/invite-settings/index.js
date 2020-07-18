import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class InviteSettings extends Component {
  @service('store') store;

  @tracked invite;
  @tracked timeout;

  constructor(owner, args) {
    super(owner, args);

    this.invite = this.store.peekRecord('invite', this.args.id);
  }

  @action
  onInput({ target }) {
    this.invite[target.name] = target.value;

    // Debounced save
    clearTimeout(this.timeout);

    const invite = this.invite;

    this.timeout = setTimeout(() => {
      invite.save();

      target.classList.add('success-border');

      setTimeout(() => {
        target.classList.remove('success-border')
      }, 1000);
    }, 500);
  }
 }