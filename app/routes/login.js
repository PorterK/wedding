import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LoginRoute extends Route {
  @service('session') session;

  beforeModel() {
    return this.session.fetch().catch(() => {});
  }

  @action
  async signIn() {
    try {
      const data = await this.session.open('firebase', { provider: 'google' });

      const adminQuery = await this.store.query('admins', {
        filter: {
          userId: data.uid,
        }
      });

      if (!adminQuery.content.length) this.session.close();
    } catch (err) {
      console.error(err);
    }
  }

  model() {
    if (this.session.get('isAuthenticated')) this.transitionTo('admin.dashboard');
  }
}
