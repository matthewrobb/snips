import "./index.html";

import { store } from "./people-app";

store.container = document.body;

store.addPerson({
  firstName : "Ryan",
  lastName  : "McMillan"
});

store.addPerson({
  firstName : "Kevin",
  lastName  : "McCameron"
});