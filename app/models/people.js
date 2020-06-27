import Model, { attr, belongsTo } from '@ember-data/model';

export default class PersonModel extends Model {
  @belongsTo('invite') invite;

  @attr('string') firstName;
  @attr('string') lastName;
  @attr('int') phoneNumber;
  @attr('bool') attending;
  @attr('bool') receiveUpdates;
}
