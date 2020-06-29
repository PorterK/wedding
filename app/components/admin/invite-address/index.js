import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class InviteAddress extends Component {
  @service('store') store;

  @tracked address;
  @tracked invite;

  constructor(owner, args) {
    super(owner, args);
    this.invite = this.store.peekRecord('invite', this.args.inviteId);

    try {
      this.store.findRecord('address', this.invite.data.address)
        .then((address) => {
          this.address = address
        });
    } catch (_) {
      this.address = this.store.createRecord('address', { invite: this.invite });
    }
  }

  @action
  onInput({ target: { name, value } }) {
    this.address[name] = value;
  } 

  @action
  async save() {
    try {
      await this.address.save();
    } catch (err) {
      console.error(err);
      this.invite.address = this.address;

      this.invite.save();
    }

  }
 }