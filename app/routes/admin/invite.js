import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AdminInviteRoute extends Route {
  @service('store') store;

  @action
  onInput({ target: { name, value } }) {
    this.model[name] = value;
  } 

  @action
  save() {
    this.model.save();
  }

  async model({ id }) {
    const invite = await this.store.findRecord('invite', id);

    return invite;
  }
}
