## 📍 01 - Const VS let 차이점

* **const** 는 `constant(상수)` 라는 것이고, **값이 변경이 되지 않는 것** 을 뜻 한다. 만약 `const`로 `variable`을 만들었다면, 그것을 절대값을 업데이트 할 수 없다..

* **let** 은 **값이 변경이 될수 있는 것** 을 뜻 한다. 만약 `variable`을 업데이트 하고 싶다면 `let` 을 사용하면 된다.

* **요약** : 기본으로 `const`를 쓰고 변경할 필요가 있을 때에만 `let`을 사용한다. 그리고 `var`는 사용하지 말것!! 

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


## 📍 02 - Boolean

* **boolean** 은 `ture` 아니면 `false` 로 구성이 되어 있고, 컴퓨터가 인지하는 `0`은 꺼져있다는 뜻이고, `1`은 켜져있다는 것을 의미한다. (참고로 `ture = 1` , `false = 0` 이다..) 

```JavaScript

const amIFat = true;
const amIBig = false;

console.log(amIFat);
console.log(amIBig);

```

## 📍 03 - Null VS Undefined 차이점

* **Null** 은 그 변수에 아무것도 없다는 것을 의미한다. 예제를 보면 `variable`로 `amIFat` 이라는 것을 생성했는데, 거기에 아무것도 없는걸로 채워넣는것을 뜻한다. 즉 비워있다기 보다는, 아무것도 없는 상태로 채워진 것이다.

* **Undefined(정의되지않음)** 은 어떤 `variable`이 메모리에는 있는데, 값이 없는것을 의미한다. 예제를 보면 `something` 이라는 `variable`이 존재하는데, 값이 주어지지 않은 것이다. 즉 `amIFat`은 존재하고, 값이 주어졌는데 그 값은 **"비어있음"** 인 것.

* **요약** : `null`은 말 그대로 "비어있음" 을 의미하고, `undefined`는 `variable`이 메모리에 만들어져있다. 컴퓨터가 `variable`에 대해서 인지하고 있지만, 값이 없는 것임. 

```JavaScript

const amIFat = null;  // defined 되었지만 아무 의미도 없음
let something;   // undefined

console.log(amIFat);
console.log(something);

```

## 📍 04 - Array

* **Array** 시작과 끝에는 `대괄호[""]`를 사용해야 하고, `array` 안에 각각 항목은 `쉼표`로 분리되어야 한다. 항목에는 `숫자`, `string`, `boolean`, `null`, `undefined`을 넣어도 된다.

* `console.log` 괄로안에 원하는`[숫자]`를 입력하면 그날에 요일이 불러오게 된다 예제에서는 `4번`이니깐 아마도 `fri` 나오게 된다. 또한 컴퓨터는 순서를 `0`부터 시작하기 떄문에 미리 알고 있자~!!

* **push** 는 항목 하나를 `array` 안에 추가를 해준다. 예제에서는 토요일까지만 나오게 되어있지만 `push` 사용해서 추가하게 되면 콘솔창에서 일요일까지 추가되서 나오게 된다.

* **요약** : `array`으 목적은 하나의 `variable` 안에 데이터 `list` 를 가지는 것이다.

```JavaScript
// 각각 variable 생성 <비추!>
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";

const daysOfWeek = [mon, tue, wed, thu, fri, sat];
console.log(daysOfWeek);

//  배열 안에 variable 생성 <강추!>
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek);

// Get Item from Array
console.log(daysOfWeek[4]); 

// Add one more day to the Array
daysOfWeek.push("sun"); 

console.log(daysOfWeek);

```

## 📍 05 - object 

* **object** 의 첫부분은 `variable`이나 `array` 를 만드는것과 **같다.** 하지만 차이점은 **중괄호{}** 를 사용한다는점이 다르다. 그리고 중괄호 안에 `property`을 작성한다. 보다시피 이건 CSS 처럼 생겼다. 

* **object** 안에서는 **=** 을 사용하지 않고 **:** 을 사용하기 때문에 `object` 밖이랑 **다르다.** 그리고 한개의 `property`를 작성하고 난 뒤에 **콤마(,)** 를 사용하게 되는데 그 이유는 `property`가 `하나 더` 올수 있기 때문이다. 

* **console.log(변수)** 를 넣거나 **(변수.object)** 를 적어서 화면에 출력할수 있다.

* **요약** : `property`를 가진 데이터를 저장하도록 해준다. 그리고 존재하지 않은 `property`를 추가할 수 있고, 만약 존재한다면 값을 업데이트를 할수 있다. 

```JavaScript

const player = {
    name: "giwoo",
    points: 1212,
    hansome: false,
    fat: true,
};

console.log(player);
console.log(player.name);

player.name = "jiwoo";  // object가 const 더라도 object의 속성은 변경 가능
console.log(player.name);
player.lastName = "potato";  // 새로운 속성 추가
console.log(player);

```