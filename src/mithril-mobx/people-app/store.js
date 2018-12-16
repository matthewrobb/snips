const { observable, computed, action, decorate } = window.mobx;

export class Person {
  constructor({ firstName = "", lastName = "" } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

decorate(Person, {
  firstName : observable,
  lastName  : observable,
  fullName  : computed
});

export class Store {
  constructor() {
    this.container = null;
    this.people = [];
  }
  
  addPerson(personData) {
    this.people.push(new Person(personData));
  }
}

decorate(Store, {
  container : observable.ref,
  people    : observable,
  addPerson : action.bound
});

export default Store;
