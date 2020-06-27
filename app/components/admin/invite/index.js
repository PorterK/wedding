import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Haikunator from 'haikunator';

export default class InvitesTable extends Component {
  @service('store') store;

  @tracked inviteCode;
  @tracked name;
  @tracked notes;
  @tracked street;
  @tracked city;
  @tracked state;
  @tracked zip;

  constructor(owner, args) {
    super(owner, args);

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
    
    this.inviteCode = haikunator.haikunate();
  }

  @action
  onInput({ target: { name, value } }) {
    this[name] = value;
  } 

  @action
  saveAddress() {
  //   this.store.create('invites', {
  //     code: this.inviteCode,
  //     rsvpAccepted: false,
  //     sent: false,
  //   });
  }
 }