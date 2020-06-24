import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class InvitesTable extends Component {
  @service('store') store;
  @service('router') router;

  @action
  getInvites() {
    return this.store.findAll('invites');
  }

  @action
  newInvite() {
    this.router.transitionTo('admin.invite/new');
  }
}