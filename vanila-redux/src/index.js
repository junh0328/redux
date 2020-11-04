const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

let count = 0;

number.innerText = count;

// html에서 count 의 값이 변화되었다는 것을 알려주기 위해 updatingCount 함수를 만들어서 number 값에 저장해주었다.
const updatingCount = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count = count + 1;
  updatingCount();
};

const handleMinus = () => {
  count = count - 1;
  updatingCount();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
