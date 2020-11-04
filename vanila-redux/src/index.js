import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

const reducer = (count = 0) => {
  return count;
};

const store = createStore(reducer);

console.log(store.getState());
