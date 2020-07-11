import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Person extends Component {
  @service('store') store;

  @tracked person;

  constructor(owner, args) {
    super(owner, args);

    this.person = this.store.peekRecord('person', this.args.id)
  }


  @action
  onInput({ target: { name, value } }) {
    this.person[name] = value;
  }

  @action
  async delete() {
    await this.person.destroyRecord();

    await this.args.reload();
  }
 }