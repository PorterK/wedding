import Component from '@glimmer/component';

export default class InvitesTable extends Component {
  get invites() {
    return this.store.peekAll('invites');
  }
}