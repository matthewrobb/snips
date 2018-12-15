import Person from "./person.js";

export class People {
  view({ attrs }) {
    const { people, addPerson } = attrs;
    
    return m("div", 
      m("button", { onclick: addPerson }, "Add Person"),
      m("ul", people.map(Person.render))
    );
  }
}

export default People;
