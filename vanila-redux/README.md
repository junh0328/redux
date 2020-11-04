# Vanila Redux

Learning vanila redux and react redux

- 1.0 Vanilla Counter

  > > html과 javascript를 사용하여 텍스트(숫자) 0의 상태를 관리하는 함수를 만들었다.
  > > 하지만, 일반적인 자바스크립트 함수는 처리한 값에 대해서 자동으로 업데이트를 하는 것이 아니기 때문에, updatingCount라는 함수를 만들어, 그 안에서 숫자 값을 업데이트 시켜주었다.

- 1.1 store and reducer
  > > 리덕스의 기능 중 하나인 Store를 사용하여 텍스트(숫자)를 상태 관리 해준다.
  > > store 는 data 즉, 변경 될 state 값을 저장할 장소를 생성한다.
  > > 리덕스는 이러한 data 관리를 도와주기 위해 만들어 졌다.
  > > createStore는 반드시 리듀서함수를 메개변수로 받아야 하는데, 그 메개변수에서 return 되는 값을 통해서 상태를 관리할 수 있게 된다.
