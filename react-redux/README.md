# react-redux

- 3.1 Connecting the store

  > > 리덕스로 만든 CreateStore를 담은 파일은 store.js와 App.js를 연결해주기 위해서 index.js에 Provider라는 react-redux를 추가하였다.
  > > 이 Provider는 필수적으로 store를 필요로 하는데 여기에 store.js 컴포넌트를 연결해 준다.

- 3.2 mapStateToProps
  > > 자바스크립트에서 리덕스를 연결하여 정보를 받아올 때는 getState() 함수를 사용했다.
  > > 하지만, 리액트에서 연결된 정보를 가져오기 위해서는 connect() 단계를 통해 컴포넌트(ex Home.js)들을 store에 연결해준다.
  > > connect()는 state와 dispatch 2개의 arguments를 갖는다.
  > > 따라서 우리는 Home 컴포넌트에서 getCurrentState()라는 함수를 사용하여 Home 컴포넌트와 store를 연결시켜줄 것이다.
  > > 이러한 연결 과정을 redux 에서는 mapStateToProps라고 부른다.
  > > 이 함수는 기본적으로 2개의 변수를 받는데, function mapStateToProps(state, ownProps?)
  > > 첫 번째 변수인 state에는 Redux store에서 오는 state를 받고, 두 번째 변수는 컴포넌트에서 오는 props를 받는다.
  > > 따라서 이 함수를 현재 상황에서 콘솔창에 찍어보면 state = [], 즉 빈 배열로 나오는 것을 알 수 있다. (우리가 초기 값을 빈 배열로 주었기 때문에 그것을 그대로 받아왔다.)
  - 우리가 redux에서 store.getState()로 state를 받아왔던 것을 react-redux는 mapStateToProps()를 통해서 받아온다고 생각하면 된다.
