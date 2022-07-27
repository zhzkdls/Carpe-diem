## 📍 01 - Const VS let 차이점❗❗

* **const** 는 `constant(상수)` 라는 것이고, **값이 변경이 되지 않는 것** 을 뜻 한다. 만약 `const`로 `variable`을 만들었다면, 그것을 절대값을 업데이트 할 수 없다..

* **let** 은 **값이 변경이 될수 있는 것** 을 뜻 한다. 만약 `variable`을 업데이트 하고 싶다면 `let` 을 사용하면 된다.

* **결론❗❗** : 기본으로 const를 쓰고 변경할 필요가 있을 때에만 let을 사용한다. 그리고 var는 사용하지 말것!! 

```JavaScript

const a = 5;   // 값을 변경할 수 없는 상수
const b = 2;
let myName = "초마킴";  // 값을 변경할 수 있는 변수

console.log(a + b);    // 콘솔에 출력
console.log(a * b);
console.log(a / b);
console.log("안녕, 내 이름은 " + myName);

myName = "코코아";   // 변수 이름 변경 
console.log("너의 이름은 " + myName);

```


## 📍 02 - Boolean과 null VS Nndefined 차이점❗❗

* **boolean** 은 `ture` 아니면 `false` 로 구성이 되어 있고, 컴퓨터가 인지하는 `0`은 꺼져있다는 뜻이고, `1`은 켜져있다는 것을 의미한다. (참고로 `ture = 1` , `false = 0` 이다..) 

```JavaScript
const amIFat = true;
const amIBig = false;
const amISmall = null;  // defined 되었지만 아무 의미도 없음
let something;          // undefined
console.log(amIFat);
console.log(amIBig);
console.log(amISmall);
console.log(something);
```