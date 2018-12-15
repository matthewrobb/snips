import Renderable from "./renderable";

export class Person extends Renderable {
    constructor(vnode) {
      super(...arguments);
      
      this.person = vnode.attrs;
    }
  
    onInput = ({ target }) => {
      this.person[target.name] = target.value;
    };
     
    view(vnode) {
      const { firstName, lastName, fullName } = vnode.attrs;
      
      return m("li", { oninput : this.onInput },
        m("div", "First Name: ", m("input", { name : "firstName", value : firstName })),
        m("div", "Last Name: ", m("input", { name : "lastName", value : lastName })),
        m("div", "Full Name: ", m("input", { readonly : true, value : fullName }))
      );
    }
}

export default Person;