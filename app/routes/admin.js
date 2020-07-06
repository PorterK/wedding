import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminRoute extends Route {
  @service('session') session;
  @service('store') store;

  async model() {
    if (!this.session.get('isAuthenticated')) {
      this.session.invalidate();
      this.transitionTo('login');
    } else {
      const { user } = this.session.get('data')?.authenticated;

      const adminQuery = await this.store.query('admin', {
        filter: {
          userId: user.uid,
        }
      });

      if (!adminQuery.content.length) this.session.invalidate();
    }
  }
}
