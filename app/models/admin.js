import Model, { attr } from '@ember-data/model';

export default class AdminsModel extends Model {
  @attr('string') userId;
}
