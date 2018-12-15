const { autorun, observable, computed, action } = window.mobx;

export class Person {
  @observable firstName = "";
  @observable lastName = "";

  constructor(personData = {}) {
    Object.assign(this, personData);
  }

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export class Store {
  @observable.ref container = null;

  @observable people = [];

  addPerson(personData) {
    this.people.push(new Person(personData));
  }
}

export default Store;
