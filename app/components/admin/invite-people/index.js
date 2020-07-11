import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class InvitePeople extends Component {
  @service('store') store;

  @tracked invite;
  @tracked people;
  @tracked loaded;

  constructor(owner, args) {
    super(owner, args);

    this.invite = this.store.peekRecord('invite', this.args.inviteId);
    
    this.getPeople();
  }

  @action
  async getPeople() {
    this.people = await this.store.query('person', {
      filter: {
        invite: this.invite.id,
      },
    });

    this.loaded = true;
  }

  @action
  async addPerson() {
    try {
      const person = this.store.createRecord('person', { invite: this.invite });

      await person.save();
    } catch (_) {
      console.log(_)
    }

    await this.getPeople();
  }
}