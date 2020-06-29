import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AdminInviteRoute extends Route {
  @service('store') store;

  @action
  onInput({ target: { name, value } }) {
    console.log('hellO!')
    this.model[name] = value;
  } 

  @action
  save() {
    console.log('here', this.model);
    this.model.save();
  }

  async model({ id }) {
    const invite = await this.store.findRecord('invite', id);

    return invite;
  }
}
