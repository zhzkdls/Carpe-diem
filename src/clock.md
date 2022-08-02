# 📝 section - CLOCK
<br>
<br>

 
## 📍 01 - Intervals

* interval = 매번 일어나야 하는 무언가를 말한다. 
* setInterval 은 5초마다 무언갈 반복적으로 실행하는 함수다. 또는 어떤 함수를 일정 간격으로 호출해주는 함수이다.
    >(실행하고자 하는 function, 호출되는 function 간격을 몇 ms로 할지)
    >setInterval(함수이름, 함수주기);
* 함수주기는 1/1000초 단위임으로 1000이 들어가야 1초마다 호출, 3000이들어가면 3초마다 호출
    >5000ms = 5초

* setInterval(a,b); -> setInterval(sayHello, 5000); a에는 반복되길 원하는 함수를 써주고, b에는 그 함수가 반복될 초를 입력하면 된다.

* (예시) 
    >const clock = document.querySelector("h2#clock");
    >const clock = document.querySelector("#clock");
    >const clock = document.getElementById("clock");
    >모두 같다.

* **요약** : interval : 매초마다 실행하기, setInterval(실행시킬 함수, 시간 간격)

```javascript
const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000);
```
