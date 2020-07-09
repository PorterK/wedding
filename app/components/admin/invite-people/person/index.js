import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Person extends Component {
  @service('store') store;

  @tracked person;

  constructor(owner, args) {
    super(owner, args);

    this.store.findRecord('person', this.args.id)
      .then((person) => {
        this.person = person;
      });
  }


  @action
  onInput({ target: { name, value } }) {
    this.person[name] = value;
  }
 }