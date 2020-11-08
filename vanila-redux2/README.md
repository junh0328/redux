# Vanila Redux2

- 2.0 Vanila ToDo

- state Mutation

  > > 리듀서의 규칙 ! 너가 만든 상태 값(state)을 함부로 변형(mutate) 시키면 안된다.
  > > 배열일 경우, 기존 배열 [ "달" ] 에 새로운 객체룰 추가/제거하기 위해 push/pop 등으로 ["달", "해"] 로 만들면 안된다는 것이다.
  > > 상태를 수정하는 것이 아닌, 새로운 배열을 (state) 리턴받아야 한다.

- 데이터 흐름 정리
- 2.1.1 redux의 내장함수인 createStore를 import 한다.
- 2.1.2 createStore(reducer)를 사용하기 위해 store 변수를 선언한다.
- 2.1.3 reducer 함수를 선언(정의)한다.
- 2.1.4 action.type으로 들어갈 변수들을 선언한다. action.type을 잘못 선언하였을 경우 Ex)스펠링 오류, 콘솔창에서 오류를 확인하기 위해)
- 2.1.5 dispatch 시킬 함수 dispatchAddToDo를 정의한다.
- 2.1.5.1 이때, 원래 dispatch시에는 store.dispatch({ 액션타입 })) 을 보내지만, 이 액션 타입또한 const addToDo로 정의해 주었다.
- 2.1.6 form 태그에서 "add" 버튼을 눌렀을 때 실행할 메소드를 정의한다. const onSubmit = (e) => { ... }
- 2.1.6.1 이 submit을 통해 dispatchAddToDo로 인풋값을 dispatch 시킨다.
- 2.1.7 deleteToDo를 하기 위해서는 ToDo리스트를 화면에 렌더링(페인팅) 해줘야 한다.
- 2.1.7.1 따라서 paintToDos 함수를 정의한다.
- 2.1.7.2 paintToDos에 들어가는 id는 ADD_TODOS 를 리턴할 때 발생하는 만든 시간을 받는다.
- 2.1.7.3 따라서 이 id를 통해 filter() 함수로 선택된 id에 따른 배열(li)를 지워 줄 수 있는 것이다.
- 2.1.8 위의 상태 변화를 감지하기 위해 subscribe 함수를 사용한다.
