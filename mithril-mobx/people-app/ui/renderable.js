export class Renderable {
    static get render() {
      const value = m.bind(null, this);
      Object.defineProperty(this, "render", { value });
      return value;
    }
  }
  
  export default Renderable;