import People from "./people.js";

export class App {
  view({ attrs }) {
    return m(People, attrs);
  }
}

export default App;
