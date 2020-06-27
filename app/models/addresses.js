import Model, { attr, belongsTo } from '@ember-data/model';

export default class AddressModel extends Model {
  @belongsTo('invite') invite;

  @attr('string') street;
  @attr('string') city;
  @attr('string') state;
  @attr('int') zip;
  @attr('string') to;
}
