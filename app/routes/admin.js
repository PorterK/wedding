import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminRoute extends Route {
  @service('session') session

  beforeModel() {
    this.store.findAll('invites');

    return this.session.fetch().catch(() => {});
  }

  model() {
    if (!this.session.get('isAuthenticated')) this.transitionTo('login');
  }
}
