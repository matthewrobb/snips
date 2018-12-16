import App from "./ui/app.js";
import Store from "./store.js";
 
export const store = new Store();

mobx.autorun(()=> {
  const { container } = store;
  
  if (container) {
    m.render(container, m(App, store));
  }
});
