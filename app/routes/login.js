import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import firebase from 'firebase/app';

export default class LoginRoute extends Route {
  @service('session') session;
  @service('store') store;
  @service('firebaseApp') app;

  @action
  async signIn() {
    try {
      const auth = await this.app.auth();
      const provider = new firebase.auth.GoogleAuthProvider();

      // Force account select when only 1 account is signed in
      provider.setCustomParameters({
        prompt: 'select_account',
      });

      const { user } = await auth.signInWithPopup(provider);

      const adminQuery = await this.store.query('admin', {
        filter: {
          userId: user.uid,
        }
      });

      if (!adminQuery.content.length) this.session.invalidate();
    } catch (err) {
      console.error(err);
    }
  }

  model() {
    if (this.session.get('isAuthenticated')) this.transitionTo('admin.dashboard');
  }
}
