import Model, { attr, belongsTo } from '@ember-data/model';

export default class PersonModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('number') phoneNumber;
  @attr('boolean') attending;
  @attr('boolean') receiveUpdates;

  @belongsTo('invite') invite;
}
