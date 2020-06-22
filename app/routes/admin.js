import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminRoute extends Route {
  @service('session') session

  async beforeModel() {
    await this.session.fetch();

    if (!this.session.get('isAuthenticated')) {
      this.transitionTo('login');
    }
  }
}
