import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import Haikunator from 'haikunator';

export default class InvitesTable extends Component {
  @service('store') store;

  get haiku() {
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
    
    return haikunator.haikunate();
  }
 }