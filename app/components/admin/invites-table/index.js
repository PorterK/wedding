import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class InvitesTable extends Component {
  @service('store') store;
  
  @action
  getInvites() {
    return this.store.findAll('invites');
  }
}