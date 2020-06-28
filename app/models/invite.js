import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class InviteModel extends Model {
  @attr('string') code;
  @attr('boolean') rsvpAccepted;
  @attr('string') notes;
  @attr('boolean') sent;

  @hasMany('person') people;
  @belongsTo('address') address;
}
