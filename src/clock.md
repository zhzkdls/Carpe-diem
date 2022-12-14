# π section - CLOCK
<br>
<br>

 
## π 01 - Intervals

* `interval` = λ§€λ² μΌμ΄λμΌ νλ λ¬΄μΈκ°λ₯Ό λ§νλ€. 
* `setInterval` μ `5μ΄`λ§λ€ λ¬΄μΈκ° λ°λ³΅μ μΌλ‘ μ€ννλ ν¨μλ€. λλ μ΄λ€ ν¨μλ₯Ό μΌμ  κ°κ²©μΌλ‘ νΈμΆν΄μ£Όλ ν¨μμ΄λ€.
    >(μ€ννκ³ μ νλ `function`, νΈμΆλλ `function` κ°κ²©μ λͺ `ms`λ‘ ν μ§)
    >`setInterval`(ν¨μμ΄λ¦, ν¨μμ£ΌκΈ°);
* ν¨μμ£ΌκΈ°λ `1/1000`μ΄ λ¨μμμΌλ‘ `1000`μ΄ λ€μ΄κ°μΌ `1μ΄`λ§λ€ νΈμΆ, `3000`μ΄λ€μ΄κ°λ©΄ `3μ΄`λ§λ€ νΈμΆ
    >`5000ms = 5μ΄`

* `setInterval(a,b);` -> `setInterval(sayHello, 5000);` `a`μλ λ°λ³΅λκΈΈ μνλ ν¨μλ₯Ό μ¨μ£Όκ³ , `b`μλ κ·Έ ν¨μκ° λ°λ³΅λ  μ΄λ₯Ό μλ ₯νλ©΄ λλ€.

* (μμ) 
    ```javascript
    const clock = document.querySelector("h2#clock");
    const clock = document.querySelector("#clock");
    const clock = document.getElementById("clock");
    //λͺ¨λ κ°λ€.
    ```

* **μμ½** 
    * `interval` : λ§€μ΄λ§λ€ μ€ννκΈ° 
    * `setInterval` : (μ€νμν¬ ν¨μ, μκ° κ°κ²©)

```javascript
const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000);
```

## π 02 - Timeouts and Dates

* `setInterval`μ λ°λ³΅μ μΌλ‘ `nμ΄`λ§λ€ ν¨μλ₯Ό μ€νμν¨λ€.
* `setTimeout`μ `nμ΄` λ€μ ν¨μλ₯Ό μ€νμν¨λ€.
    * `setTimeout`μ μΌμ  μκ°μ΄ μ§λ ν νλ²λ§ μ€νλ¨
    * `setTimeout`(ν¨μμ΄λ¦, μκ°)
    * μκ°μ` 1/1000`λ¨μμ΄λ―λ‘ `1000μ΄ 1μ΄`

```JavaScript
setInterval(sayHello, 5000);

setTimeout(sayHello, 1000);
```

* `Date object`μ `object`λ΄ ν¨μλ₯Ό μ΄μ©νμ¬ `μ€μκ°`μΌλ‘ `μλ°μ΄νΈ`λλ μκ³λ₯Ό κ΅¬νν  μ μλ€.

* `Date object` : `web`μμ μ κ³΅νλ κΈ°λ³Έ κ°μ²΄λ‘ `λ μ§/μκ°`κ³Ό κ΄λ ¨λ κ°μ²΄μ΄λ€.

    * **const date = new Date()** : `Date` κ°μ²΄ μμ±

    * **date.getHours()** : νμ¬ μκ° `return`

* μμ κ°μ `Date object`μ `setInterval`ν¨μλ₯Ό μ΄μ©νμ¬ λ§€ μ΄ νμ¬ μκ°μ λ°μμ `h2 tag`μ μλ°μ΄νΈ ν¨μΌλ‘μ¨ μ€μκ°μΌλ‘ μλ°μ΄νΈ λλ μκ³λ₯Ό λ§λ€ μ μλ€

* **date()** : λ μ§ μκ°μ λν λ¨μ λ¬Έμμ΄ `string` μμ±νλ€.
* **new date()** : λ μ§ μκ°μ λν μ€λΈμ νΈ μμ±, λ΄λΆμ λ€μν λ©μλ μ¬μ©κ°λ₯ νλ€.
    >νμ¬μ λ μ§ μμΌ μκ°μ μ»κ²ν΄μ£Όλ ν¨μ

* `Date` κ°μ²΄λ₯Ό `1μ΄`λ§λ€ μλ‘ λ§λ€μ΄ κ°±μ λ μκ°μ κ°μ Έμ `clock.innerText`μ λ£μ΄μ£Όλ λ°©μ..

* **getClock();μ μ¨μ€ μ΄μ **
    * `interval`μ μν΄ `1μ΄` λ§λ€ ν¨μλ₯Ό μ€νμν€κΈ° λλ¬Έμ μ²μμ μΉνμ΄μ§κ° `load`λλ©΄ `1μ΄`λμμ 00:00:00μΌλ‘ νμλλλ° μ΄κ±Έ μμ κΈ°μν¨μ΄λ€

* **setInterval(getClock, 1000);** μ `μ€μκ°`μΌλ‘ λ³΄μ΄κ² νλ κΈ°λ₯μ΄λ€. λ§μ½ μ΄ μ½λκ° μμΌλ©΄ μκ°μ μλ‘ λ§λ€μ΄λ΄κΈ΄ νμ§λ§ κ·Έ λΉμ μκ°λΏμ΄λ€. νλ²λ§ μ€νλκ³  μμμ΄ λ°λ³΅λμ§ μλλ€.

```javascript
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);
```

## π 03 - PadStart

* **padStart()** λ `string`μ μΈ μ μλ `function`μ΄λ€.
* `string`μ΄ μ μ΄λ `2κ°` `μ΄μ`μ λ¬Έμλ₯Ό κ°μ§κ³  μκ² λ§λ λ€.
    * `padStart`(μ΅μ λ¬ΈμκΈΈμ΄, μΆκ°ν  λ΄μ©): μμ λ¬Έμ μΆκ° 
    * `padEnd`(): λ€μ λ¬Έμ μΆκ°

* **ex ) "1".padStart(2, "0")** : λ¬Έμ κΈΈμ΄κ° `2μ΄μ`μ΄μ¬μΌ νκ³  μμΌλ©΄ μμ `0μΆκ°`
    * **κ²°κ³Ό** : `"01"`

* `date.getHours()`μ `padStart` μ μ©νλ €λ©΄ λ¬Έμλ‘ λ§λ€μ΄μΌ νλ€. μ κ±° μμ²΄λ μ«μμ΄λ€. 
    * μ΄λ `String`μ μ΄μ©ν΄μ μ«μλ₯Ό λ¬Έμλ‘ λ§λ€μ΄μ€ μ μλ€.

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
    * **λ» :** κΈΈμ΄κ° 1μΈ λ¬Έμ`(string)`μ `string`  μμ λλ¦¬λΌκ³  `Sμκ²` λΆννλκ±°λ€.μ΄ `string`μ κΈΈμ΄λ `2κ°` λμ΄μΌνλ€. κΈΈμ΄κ° `2κ°` λμ§ μλλ€λ©΄ `string` μμ `"0"`μ `μΆκ°`ν΄μΌνλ€.

#### AM & PM(1)π»

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

#### AM & PM(2)π»

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