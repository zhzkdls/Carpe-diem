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

* **daysOfWeek[0] = "choma"** 라고 하면 `"mon"` 가 `"choma"`로 업데이트가 된다.

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

// 업데이트
daysOfWeek[0] = "choma"

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

## 📍 06 -  Function

* **Function** 은 어떤 코드를 **캡슐화** 해서, 실행을 여러번 할수 있게 해주고, 특징은 `괄로()`가 필요하다. 그리고  `function`은 실행하게 될 `중괄호{}`가 필요하다.

* 만약 내가  `sayHello`의 실행을 누를 떄마다 `console.log("Hello!");` 가 실행한다. 실행하는 방법은 이 `괄로()`가 실행하는 방법이다.

* 예제에서는 첫번째 `argument`로 어떤 데이터가 들어오면 `name`, `age` 이라는 `variable` 이름, 나이를 쓰게 된다는 것이다. 또한 하나만 받는게 아니라 여러개를 받을수 있다.

    * **argument(인수)** `function`을 실행하는 동안 어떤 정보를  `function` 에게 보낼수 있는 방법이다. 


* **요약** : `sayHello function` 은 2개의 `argument` 를 받고 있다. 첫번째는 `string`이 되는것이고, 두번째는 `age`가 되는것이다. 물론 이 두가지 `name`과 `age`는 이 `()괄로`안에서만 존재한다. 또한 `function`의 `body`에만 존재한다.

```JavaScript

function sayHello(name, age){
    console.log("Hello my name is " + name + " and I'm " + age + " years old!");
}
sayHello("ohjiwoo", 22);
sayHello("nico", 23);
sayHello("nomade", 21);
sayHello("coder", 20);

```

* 02_예제

```JavaScript

function plus(firstNumber, secondNumber){  // 매개변수 순서 중요
    console.log(firstNumber, secondNumber);  // 두 수를 단순히 출력
    console.log(firstNumber + secondNumber);  // 두 수를 더해서 출력
}
function divide(a, b){  // 매개변수는 함수 내에서만 사용 가능
    console.log(a / b);
}
plus(8, 60);
divide(98, 20);

```

* 03_예제

```JavaScript

// player object
const player = {
    name: "jiwoo",
    sayHello: function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you!");
    },
};
console.log(player.name);
player.sayHello("lynn");

```

## 📍 07 -  Return

* **return** 은 변수에 `function`을 할당하면, 이 `variable`의 `return value`를 가지게 된다. 즉 `calculator.plus`가 `5`를 `return`하면 `plusResult`는 `5`가 된다. 근데 이런 `return`을 했을 떄에만 가능하다. 쉽게 말해서 한번 `return`을 하면 `function`이 끝나고, `return`을 하면 `function`을 작동을 멈추고 결과 값을 `return`하고 끝난다.

* **콘솔** 은 그저 콘솔에 값을 보여주기 위한 것 일뿐 우리의 코드에서는 결과 값을 알 수 없었다.

* **요약** : `return`을 쓸 때의 주의사항
    * 한번 `return`을 하면 해당 함수는 끝난다!
    * 그렇기 때문에 `return`뒤에 작업을 한다면 출력되지 않는다!
    * (**＃return** 앞에 작업을 한다면 출력된다)

    * `return`은 말 자체로 다시 돌려준다라는 의미로
    * 해당 함수의 변수값을 지정해주면 `해당code`를 안에서 실행해서
    * 그 결과값을 해당 함수의 변수값을 선언한 변수한테 돌려주는것이다 !

```JavaScript

const calculator  = {
    plus: function (a, b) {
        return a + b;
        //더하기
    },
    minus: function(a,b) {
        return a - b;
        //빼기
    },
    divide: function(a,b) {
        return a / b;
        //나누기
    },
    times: function(a,b){
        return a * b;
        //곱하기
    },
    power: function(a,b){
        return a ** b;
        //제곱
    }

};
const plusResult = calculator.plus(2 + 3);

```

## 📍 07 -  Conditional

* 무언가가 **NaN**인지를 **판별**하는 방법
    * **isNaN()함수** 는 숫자가 아닌 값을 찾는 함수이다.
    * 인수가 `NaN`이면 `true` 아니면 `false`
    * 즉, 숫자일시 `true`가 반환 아닐시 `false`가 반환

* **if(조건문)** 사용
    * `if`문은 특정 조건 만족 시(참인 경우) 실행하는 명령의 집합
    * `if else`문은 조건이 맞을때와 틀릴때의 `2가지` 경우에 대한 코드를 작성하는 구문
    * if문 문법
   
    ```JavaScript
    
    if(조건식){
    조건이 참일 때 실행식
    }else{
    조건이 거짓일 때 실행식
    }

    ```

    ```JavaScript

    if (isNaN(age)) {
    /// true 일때 실행됨.
    console.log("please write a number");
    } else {
    /// false 일때 실행됨.
    console.log("Thank you for writing your age.");
    }

    ```

* **operator(연산자)** 

* **&&** : **and** 즉 그리고의 의미로 좌항과 우항이 **모두** true여야 true를 반환, 두 항 중 하나라도 false면 false값을 반환

* **||** : **or** 즉 또는의 의미로 좌항과 우항 중 **하나**라도 true이면 true를 반환, 두 항 모두 false일때 false를 출력

* **<=** : 작거나 같다

* **=>** :  크거나 같다

* 좌우가 같다는 연산은 **===** 또는 **==** 이다.


```JavaScript

true || true === true
false || true === true
true || false === true
false || false === false

true && true === true
false && true === false
true && false === false
false && false === false

```

* **예제코드**

```JavaScript
const age = parseInt(prompt("몇살이세요??"));

    if (isNaN(age) || age < 0) {
    /// true 일때 실행됨.
    console.log("제발 번호를 적어주세요");
    } else if (age < 18){
    /// false 일때 실행됨.
    console.log("넌 너무 어려! 집밥이나 먹어");
    } else if (age >= 50 && <= 50){
    /// false 일때 실행됨.
    console.log("클럽에 오신걸 환영합니다.");
    } else if (age > 50 && <= 80){
    /// false 일때 실행됨.
    console.log("다이어트나 하세욧~!!!");
    }else if (age > 80){
    /// false 일때 실행됨.
    console.log("요양원에 입장하세요");
    }


```
