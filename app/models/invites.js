import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class InviteModel extends Model {
  @hasMany('person') people;
  @belongsTo('address') address;

  @attr('string') code;
  @attr('bool') rsvpAccepted;
  @attr('string') notes;
  @attr('bool') sent;
}
