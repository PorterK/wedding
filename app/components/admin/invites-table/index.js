import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Haikunator from 'haikunator';

export default class InvitesTable extends Component {
  @service('store') store;
  @service('router') router;

  @action
  getInvites() {
    return this.store.findAll('invite');
  }

  @action
  async generateUniqueCode() {
    const haikunator = new Haikunator({
      adjectives: [
        'happy', 'exciting', 'generous', 'gleeful',
        'jolly', 'eloped', 'thrilled', 'cheerful',
        'joyous', 'delighted','sunny', 'beloved',
        'inspiring', 'wishful', 'committed',
        'heartfelt', 'romantic', 'beautiful', 'lucky',
        'elegant', 'caring', 'handsome' 
      ],
      nouns: [
        'wedding', 'cake', 'flower', 'gift', 'bouquet',
        'groom', 'bride', 'christmas', 'succulent',
        'icing', 'petal', 'tree', 'elf', 'snowman',
        'winter', 'santa', 'snow', 'dress', 'suit',
        'love'
      ],
      defaults: { 
        delimiter: "-",
        tokenLength: 0,
      }
    });

    let code = haikunator.haikunate();

    const existingRecord = this.store.query('invite', {
      filter: {
        code,
      },
    });

    if (existingRecord.length) {
      code = await this.generateUniqueCode();
    }

    return code;
  }

  @action
  async newInvite() {
    const code = await this.generateUniqueCode();

    const invite = this.store.createRecord('invite', {
      code,
    });

    console.log(invite);

    try {
      await invite.save();
    } catch (err) {
      console.error(err);
    }

    this.router.transitionTo('admin.invite', { id: invite.id });
  }
}