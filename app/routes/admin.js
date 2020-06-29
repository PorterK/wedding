import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminRoute extends Route {
  @service('session') session

  model() {
    if (!this.session.get('isAuthenticated')) {
      this.session.invalidate();
      this.transitionTo('login');
    }
  }
}
