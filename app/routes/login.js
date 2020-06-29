import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import * as firebase from 'firebase';

export default class LoginRoute extends Route {
  @service('session') session;
  @service('firebase-app') app;

  @action
  async signIn() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();

      const data = await this.app.auth().signInWithPopup(provider);

      const adminQuery = await this.store.query('admin', {
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
