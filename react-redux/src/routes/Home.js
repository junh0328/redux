import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    addToDo(text);
    setText("");
  };
  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
};

// store.js에 저장된 현재 state = [] 를 매핑하겠다는 함수
const mapStateToProps = (state) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
