import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationRoute extends Route {
  @service('session') session;

  beforeModel() {
    return this.session.fetch().catch(() => {});
  }

  @action
  async signIn() {
    const data = await this.session.open('firebase', { provider: 'google' });

    console.log(data);
  }

  @action
  signOut() {
    this.session.close();
  }
}
