# react-redux-toolkit

> > 리덕스 툴킷은 리액트-리덕스를 좀 더 간단하게 다루기 위한 패키지입니다.
> > npm install @reduxjs/toolkit 라는 명령어를 통해 실행시킬 수 있습니다.

- 4.1 CreateAction
  > > 리덕스 툴킷을 사용하기 위해서는 리덕스 툴킷에서 지원하는 createAction을 사용해야 한다.
  > > const addToDo = createAction("ADD") 와 같은 형식으로 addToDo를 변수로 사용할 수 있는데, 이때 addToDo를 반환하면,
  > > ADD라는 액션 타입과 payload가 반환되게 된다.
  > > payload는 리덕스가 우리에게 제공하는 관행같은 것으로 필요로 하는 핵심정보가 담겨있다고 보면 된다.
  > > case addToDo.type:
  > > return [{ text: action.text, id: Date.now() }, ...state]; 와 같은 스위치 문에서, 더 이상 action.text를 반환하지 않기 때문에, 이때 사용하는 것이 payload 이다. 액션으로 부터 받는 액션 타입이 아닌 무언가 (기존의 id, text )등은 payload로 반환받을 수 있다.
