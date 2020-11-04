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

  > > 1.2.1 const store = createStore(reducer) /createStore를 만든다.
  > > 1.2.2 createStore()에 매게변수로 들어가는 reducer 함수를 만든다.
  > > 1.2.3 reducer 함수에 초기값과 액션들을 세팅한다.
  > > 1.2.4 dispatch 함수를 통해 사용할 액션을 보낸다.
  > > 1.2.5 리듀서 함수를 통해 지정된 액션에 따른 값을 리턴받는다.
  > > 1.2.6 subscribe 함수를 통해 리턴받은 값을 업데이트 시킨다.
  > > 화면에 렌더링된다. (마무리)

  > > 데이터를 modify 할 수 있는 것은 오로지 reducer이기 때문에

- 1.3 Subscriptions(=신청)

> > 이러한 변화를 감지하기위해서는 subscribe()라는 함수를 사용한다.
> > subscribe() 함수의 매게변수로 받는 OnChange는 값이 변화할 때마다, store의 상태값을 가져와 number의 텍스트를 바꿔주는 역할을 한다.
> > 리덕스는 기본적으로 4개의 함수를 지원한다. dispatch/ getState/ subscribe / replaceReducer 위 함수들을 이용하여 상태 변화에 따른 모든 작업을 한다고 볼 수 있다.

- 1.4 Recap
  > > action.type 에 들어가는 type을 미리 변수로 지정해놓고 사용한다면, 타입에서 에러가 났을 때 콘솔창에서 확인할 수 있다.
  > > 스위치 문을 통해 액션타입을 간결하고 명확하게 파악할 수 있다.
