# π section - QUOTES & BACKGROUND
<br>
<br>

 
## π 01 - Quotes


* `Math module`μ `JS`μμ μ΄λ―Έ `load`λΌμ κ³΅μ§λ‘ μ κ³΅λκ³  μκ³ , `Math module`μ μ΄μ©νμ¬ `λ¬΄μμ`λ‘ λͺμΈμ λ³΄μ¬μ£Όλ μμλ₯Ό κ΅¬ννμλ€

* `Math.random()` μ `0 ~ 1`μ¬μ΄μ λλ€ μ«μλ₯Ό λ¬΄μμμ κ°μ λ°ννλ€. (μμμ μΌλ‘) `0~10` μ¬μ΄μ λλ€ν μ«μλ₯Ό λ³΄κ³  μΆμΌλ©΄ μ κΈ°μ * 0 μ νλ©΄ λλ€.
  * **Math.random() * 10;** : 3.2325817958 λ‘ λμ΄

* μ΄λ, λ€μ μλ μμμ μ μμ  μ μλ‘ λ§λ€μ΄μ£Όκ³  μΆλ€λ©΄, μΈ κ°μ§μ λ°©λ²μ΄ μλ€.
  * **Math.ceil()** : μμμ  μ²«μ§Έμλ¦¬μμ μ¬λ¦Ό
  * **Math.round(1.0001)** : λ°μ¬λ¦Ό
  * **Math.floor(1.0001)** : λ΄λ¦Ό.(λ€μ μμμ  λ¬΄μν΄μ€!!)

* λͺμΈκ³Ό μ μμ μ λ³΄λ₯Ό λ΄μ κ°μ²΄λ₯Ό λ§λ€κ³  `quotes`λΌλ `array`μ κ° κ°μ²΄λ€μ μ μ₯νμκ³ , λ¬΄μμλ‘ `array`μ μμ μ€ νκ°μ§λ₯Ό λ½μ `html.innerText`λ‘ λͺμΈκ³Ό μ μλ₯Ό μλ°μ΄νΈνλ€.
  >[1,2,3,4,5] μ΄λ κ² μκΈ΄ `array`κ° μμ λ, `Array.length`λ₯Ό μ¬μ©νλ©΄ `Array`μ κΈΈμ΄λ₯Ό λ°νν΄μ€λ€.

#### μ μ²΄μ μΈ νλ¦μ€λͺ

* `const quotes = [ ] ;` **:** λͺμΈμ λ΄μ λ³μ μμ±νλ€ λ°©λ²μ `{quote: "" , author: "" ,}` **:** κ°μ²΄ ννλ‘ λͺμΈκ³Ό μκ° μ μ₯νμκ³ , κ·Έλ¦¬κ³  `const quote` μ `const author` λ‘ `HTML` μμ μ ννλ€. μ²« λ²μ§Έ `span` μ μ νν  λλ `#quote span:first-child` λ‘ μ μ΄μ€λ€.

* λλ€μΌλ‘ `quotes` μμ μλ κ°μ²΄λ€μ μ νν  κ²μ΄λ€. `quotes` μ μλ κ°μ²΄λ€μ **quotes[0] , quotes[1]** μμΌλ‘ λΆλ¬μ¬ μ μλ€. μ΄λ λλ€μΌλ‘ μ«μλ€μ μ§μ ν΄μ£Όκ³  μΆμΌλ©΄ **math.random() ν¨μ** μ¬μ©νλ€. 

* `todaysQuote`λΌλ λ³μ λ§λ€κ³ , κ·Έ μμ quotes[Math.floor(Math.random()*quotes.length)];
λ£μ΄μ€λ€. κ·Έλ¦¬κ³  `quote` μ `author` μ `innerText` λ³κ²½νλ€.

* `todaysQuote.quote`μΌλ‘ λͺμΈμ κ°μ Έμ€κ³ , `todaysQuote.author`λ‘ μκ°λ₯Ό κ°μ Έμ¨ λ€μ `quote`μ `author` λ³μμ λ£μ΄μ€λ€.


```JavaScript
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

```

#### 10μ΄ λ§λ€ λͺμΈμ λ³κ²½νκΈ°
 
```javascript
const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
function setQuote() {
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;
}  
setQuote();
setInterval(setQuote, 10000);
```

## π 02 - Background


* `const image` λ³μλͺμ ν΄μ£Όκ³  `[]`λ£° μ¬μ©ν΄μ λ°°μ΄μ νλ€. `img`ν΄λμ μλ μ΄λ―Έμ§λ€μ΄λ μ΄ `images Array`μμ μ΄λ¦μ΄ λκ°μ΄ ν΄μΌνλ€ μκ·Έλ¬λ©΄ μ΄λ―Έμ§λ₯Ό λΆλ¬μ¬μ μκ² λλ¬Έμ΄λ€. 

* `const chosenImage` λ³μλͺμ ν΄μ£Όκ³  μμ μλ `images` λ₯Ό λΆλ¬μ¨λ€. `[]` μμλ μ΄μ μ `quote`μ λμΌν λ°©λ²μΌλ‘ `image` μ λ³΄λ₯Ό λ΄κ³  μλ `array`λ₯Ό λ§λ€κ³ , λ¬΄μμ `index`λ₯Ό ν΅ν΄ νλμ `image`λ₯Ό μ νν ν `img tag`λ₯Ό μμ±νμ¬ μ νλ `img`μ κ²½λ‘λ₯Ό μΆκ°νμ¬ κ΅¬ννμλ€.

* `javascript`μμ μ΄λ―Έμ§λ₯Ό λ§λ€κ³  μ΄κ±Έ` html`μ μΆκ°ν΄μΌ νλ€. `const bgImage` λ³μλͺμ λ§λ€κ³  `document.createElement("img")`λ₯Ό μ¬μ©νλ€. κ΄λ‘ μμλ `img` λΌλ `element`λ₯Ό μμ±νλ€.
  >document.createElement("element") : elementμ μμλ₯Ό documentμ μΆκ°νλ€. 

* `bgImage.src`μ μ΄λ―Έμ§ κ²½λ‘λ₯Ό μ μ΄μ€λ€. κ·Έλ¦¬κ³  `${chosenImage}`μ μ¬μ©νμ¬ μ΄λ―Έμ§λ₯Ό μ ννκ² ν΄μ€λ€. 

* document.body.appendChild("element") : bodyμ elementλ₯Ό μΆκ°νλ€. 
  >JSλ₯Ό ν΅ν΄μ bodyμ html tagλ₯Ό λ§λ¦.


```javascript
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `src/img/${chosenImage}`;

document.body.appendChild(bgImage);
```







