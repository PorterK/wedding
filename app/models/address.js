import Model, { attr, belongsTo } from '@ember-data/model';

export default class AddressModel extends Model {
  @attr('string') street;
  @attr('string') city;
  @attr('string') state;
  @attr('number') zip;
  @attr('string') to;
  
  @belongsTo('invite') invite;
}
