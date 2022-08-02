# 📝 section - CLOCK
<br>
<br>

 
## 📍 01 - Intervals

* `interval` = 매번 일어나야 하는 무언가를 말한다. 
* `setInterval` 은 `5초`마다 무언갈 반복적으로 실행하는 함수다. 또는 어떤 함수를 일정 간격으로 호출해주는 함수이다.
    >(실행하고자 하는 `function`, 호출되는 `function` 간격을 몇 `ms`로 할지)
    >`setInterval`(함수이름, 함수주기);
* 함수주기는 `1/1000`초 단위임으로 `1000`이 들어가야 `1초`마다 호출, `3000`이들어가면 `3초`마다 호출
    >`5000ms = 5초`

* `setInterval(a,b);` -> `setInterval(sayHello, 5000);` `a`에는 반복되길 원하는 함수를 써주고, `b`에는 그 함수가 반복될 초를 입력하면 된다.

* (예시) 
    ```javascript
    const clock = document.querySelector("h2#clock");
    const clock = document.querySelector("#clock");
    const clock = document.getElementById("clock");
    //모두 같다.
    ```

* **요약** 
    * `interval` : 매초마다 실행하기 
    * `setInterval` : (실행시킬 함수, 시간 간격)

```javascript
const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000);
```

## 📍 02 - Timeouts and Dates

* `setInterval`은 반복적으로 `n초`마다 함수를 실행시킨다.
* `setTimeout`은 `n초` 뒤에 함수를 실행시킨다.
    * `setTimeout`은 일정 시간이 지난 후 한번만 실행됨
    * `setTimeout`(함수이름, 시간)
    * 시간은` 1/1000`단위이므로 `1000이 1초`

```JavaScript
setInterval(sayHello, 5000);

setTimeout(sayHello, 1000);
```

* `Date object`와 `object`내 함수를 이용하여 `실시간`으로 `업데이트`되는 시계를 구현할 수 있다.

* `Date object` : `web`에서 제공하는 기본 객체로 `날짜/시간`과 관련된 객체이다.

    * **const date = new Date()** : `Date` 객체 생성

    * **date.getHours()** : 현재 시간 `return`

* 위와 같은 `Date object`와 `setInterval`함수를 이용하여 매 초 현재 시간을 받아와 `h2 tag`에 업데이트 함으로써 실시간으로 업데이트 되는 시계를 만들 수 있다

* **date()** : 날짜 시간에 대한 단순 문자열 `string` 생성한다.
* **new date()** : 날짜 시간에 대한 오브젝트 생성, 내부의 다양한 메서드 사용가능 하다.
    >현재의 날짜 요일 시간을 얻게해주는 함수

* `Date` 객체를 `1초`마다 새로 만들어 갱신된 시간을 가져와 `clock.innerText`에 넣어주는 방식..

* **getClock();을 써준 이유**
    * `interval`에 의해 `1초` 마다 함수를 실행시키기 때문에 처음에 웹페이지가 `load`되면 `1초`동안은 00:00:00으로 표시되는데 이걸 없애기위함이다

* **setInterval(getClock, 1000);** 은 `실시간`으로 보이게 하는 기능이다. 만약 이 코드가 없으면 시간을 새로 만들어내긴 하지만 그 당시 시간뿐이다. 한번만 실행되고 작업이 반복되지 않는다.

```javascript
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);
```

## 📍 03 - PadStart

* **padStart()** 는 `string`에 쓸 수 있는 `function`이다.
* `string`이 적어도 `2개` `이상`의 문자를 가지고 있게 만든다.
    * `padStart`(최소 문자길이, 추가할 내용): 앞에 문자 추가 
    * `padEnd`(): 뒤에 문자 추가

* **ex ) "1".padStart(2, "0")** : 문자 길이가 `2이상`이여야 하고 없으면 앞에 `0추가`
    * **결과** : `"01"`

* `date.getHours()`에 `padStart` 적용하려면 문자로 만들어야 한다. 저거 자체는 숫자이다. 
    * 이때 `String`을 이용해서 숫자를 문자로 만들어줄 수 있다.

```javascript
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
```

* **"1".padStart(2, "0")**
    * **뜻 :** 길이가 1인 문자`(string)`에 `string`  앞을 늘리라고 `S에게` 부탁하는거다.이 `string`의 길이는 `2가` 되어야한다. 길이가 `2가` 되지 않는다면 `string` 앞에 `"0"`을 `추가`해야한다.

#### AM & PM(1)💻

```javascript
const clock = document.querySelector("#clock");

function getClock() {

    const date = new Date();
    let AMPM = "AM";
    let hours = date.getHours();

    if (hours < 12) {
        AMPM = "AM";
        hours = String(hours).padStart(2, "0");
    } else {
        AMPM = "PM";
        hours = String(hours - 12).padStart(2, "0");
    }

    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds} ${AMPM}`;
}

getClock();
setInterval(getClock, 1000);
```

#### AM & PM(2)💻

```javascript
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    let hours = date.getHours();
    let AMPM = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    
    clock.innerText = `${AMPM} ${hours}:${minutes}:${seconds}`;
    clock.classList.remove("hidden");
    }

getClock();
setInterval(getClock, 1000);
```