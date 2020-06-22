import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class InvitesTable extends Component {
  @service('store') store;

  get invites() {
    return this.store.peekAll('invites');
  }
}