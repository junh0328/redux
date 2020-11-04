# Vanila Redux

Learning vanila redux and react redux

- 1.0 Vanilla Counter

  > > html과 javascript를 사용하여 텍스트(숫자) 0의 상태를 관리하는 함수를 만들었다.
  > > 하지만, 일반적인 자바스크립트 함수는 처리한 값에 대해서 자동으로 업데이트를 하는 것이 아니기 때문에, updatingCount라는 함수를 만들어, 그 안에서 숫자 값을 업데이트 시켜주었다.

- 1.1 store and reducer

  > > 리덕스의 기능 중 하나인 Store를 사용하여 텍스트(숫자)를 상태 관리 해준다.
  > > store 는 data 즉, 변경 될 state 값을 저장할 장소를 생성한다.
  > > 리덕스는 이러한 data 관리를 도와주기 위해 만들어 졌다.
  > > createStore는 반드시 리듀서함수를 메개변수로 받아야 하는데, 그 메개변수(리듀서 함수)에서 return 되는 값을 통해서 상태를 관리할 수 있게 된다.

- 1.2 actions

  > > reducer 함수를 만들 때, 초기 값 (default state 혹은 initialized)과 함께 메개변수로 받아야 하는 것은 action이 있다.
  > > 이 액션(action)을 통해 return 되는 값이 반환될 때 어떤 행동을 할 지 정해준다.
  > > 이 액션을 사용하기 위해서는 store에서 액션 타입을 dispatch 함수를 통해 객체 형식{ }으로 보내줘야 한다.
  > > store에서 dispatch를 통해 전달받은 액션 타입을 리듀서에서 판단하고, 그 타입에 맞춰서 결과값을 리턴하는 것이 리듀서의 개념이라고 볼 수 있다.

  1.2.1 const store = createStore(reducer) /createStore를 만든다.
  1.2.2 매게변수로 들어가는 reducer 함수를 만든다.
  1.2.3 reducer 함수에 초기값과 액션들을 세팅한다.
  1.2.4 dispatch 함수를 통해 사용할 액션을 보낸다.
  1.2.5 리듀서 함수를 통해 지정된 액션에 따른 값을 리턴받는다.
