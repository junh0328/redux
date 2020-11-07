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

- 4.2 CreateReducer

  > > 기존의 Reducer와의 가장 큰 차이점은 state를 mutate 할 수 있다는 것이다.
  > > 기존의 리덕스에서는 state를 mutate(변형)하는 것이 아닌, 새로운 배열을 계속해서 리턴해주었는데, CreateReducer에서는 push/ pop 등과 같이 기존 배열을 변형시키는 행위들 또한 가능하다.
  > > 기존의 리덕스에서는 return을 통해 새로운 배열을 계속해서 리턴시켜주었지만, createUser를 통해 기존 배열에 state를 추가 및 제거가 가능해졌다.
  > > switch문과 case문의 사용없이도 초깃값 (initialized)과 액션만으로도 기존의 기능을 대체할 수 있다는 점이 가장 큰 장점이다.

- 4.3 ConfigureStore
  > > configureStore는 기존의 createStore를 대신해서 사용할 수 있는 기능이다.
  > > const store = configureStore({ reducer }); 와 같은 명령문으로 실행된다.
  > > 위 기능을 통해 web page에서는 Redux devTools를 사용할 수 있다.
  > > 이 확장 기능은 리덕스를 통해 프로그램이 동작할 때마다 상태를 감지하여 state와 payload를 반환해주고, 수정, 삭제, 되돌아가기 등 다양한 기능들을 눈으로 확인할 수 있게 도와준다.
