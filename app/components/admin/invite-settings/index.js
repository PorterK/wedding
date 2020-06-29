import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class InviteSettings extends Component {
  @service('store') store;

  @tracked invite;

  constructor(owner, args) {
    super(owner, args);

    this.invite = this.store.peekRecord('invite', this.args.id);
  }

  @action
  onInput({ target: { name, value } }) {
    this.invite[name] = value;
  } 

  @action
  async save() {
    await this.invite.save();
  }
 }