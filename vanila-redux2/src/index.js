import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

/* 
reducer에 들어가는 액션 타입을 변수로 정의해놓았다.
이에 따라 변수 값이 다를 경우, 콘솔 창에서 액션 타입(변수)의 오류를 찾을 수 있다.
*/
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

/*
변수로 지정된 액션 타입을 객체 ADD_TODO를 실행할 것을 타입으로 알려주고,
text를 매게 변수로 받아와 저장한다.
*/
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

/*
DELETE_TODO를 실행하기 위해서는 고윳값(인덱스 번호)가 있어야 하는데,
그 고윳값을 id로 받아왔다. id는 데이터를 ADD_TODO 시킨 시간이다. (절대 겹치지 않는다.)
*/
const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
