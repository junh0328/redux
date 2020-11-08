# react-redux

- 3.1 Connecting the store

  > > 리덕스로 만든 CreateStore를 담은 파일은 store.js와 App.js를 연결해주기 위해서 index.js에 Provider라는 react-redux를 추가하였다.
  > > 이 Provider는 필수적으로 store를 필요로 하는데 여기에 store.js 컴포넌트를 연결해 준다.

- 3.2 mapStateToProps

  > > 자바스크립트에서 리덕스를 연결하여 정보를 받아올 때는 getState() 함수를 사용했다.
  > > 하지만, 리액트에서 연결된 정보를 가져오기 위해서는 connect() 단계를 통해 컴포넌트(ex Home.js)를 store에 연결해준다.
  > > connect()는 state와 dispatch 2개의 arguments를 갖는다.
  > > 따라서 우리는 Home 컴포넌트에서 mapStateToProps()라는 함수를 사용하여 Home 컴포넌트와 store를 연결시켜줄 것이다. (이름은 항상 mapStateToProps()로 주어야만 한다.)
  > > 두 arguments 중 한 개만 쓸 경우 한 곳은 null 값으로 표시해준다.
  > > 이 함수는 기본적으로 2개의 변수를 받는데, function mapStateToProps(state, ownProps)
  > > 첫 번째 변수인 state에는 store.js에서 오는 state를 받는다.
  > > ownProps에 대해서는 차차 알아보도록 하자.
  > > 따라서 이 함수(= mapStateToProps())를 현재 상황에서 콘솔창에 찍어보면 state = [], 즉 빈 배열로 나오는 것을 알 수 있다. (우리가 초기 값을 빈 배열로 주었기 때문에 그것을 그대로 받아왔다.)

  - 우리가 redux에서 store.getState()로 state를 받아왔던 것을 react-redux는 mapStateToProps()를 통해서 받아온다고 생각하면 된다.

- 3.3 mapDispatchToProps

  > > 기존 리덕스에서 store.dispatch({ type: MINUS }) 등과 같이 action.type을 dispatch(실행) 시키는 함수를 리액트 리덕스에서는 mapDispatchToProps를 사용하게 된다.
  > > mapStateToProps와 마찬가지로 connect() 단계를 거쳐야 한다.
  > > mapStateToProps에서 사용하는 addToDO는 액션타입으로, store.js에서 export시킨 것이다. 이렇게 리턴시킨 addToDo를 Home에서 props로 받아와서, Home에서 submit하는 onclick 이벤트에 맞춰 발동되게 된다.
  > > mapDispatchToProps 에서는 dispatch할 함수를 매게변수로 받아온다.
  > > store에 만들어 놓은 함수들을 매게 변수로 담아와 dispatch 할 것인데, store에서 받아온 다는 것을 보여주기 위해 store에서 actionCreators = {} 라는 변수로 함수를 담아두었다.
  > > 이것을 Home.js에서 import 받아서 실행할 것이다.

- 3.4 deleteToDo
