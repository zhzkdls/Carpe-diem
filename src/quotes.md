# 📝 section - QUOTES & BACKGROUND
<br>
<br>

 
## 📍 01 - Quotes


* `Math module`은 `JS`에서 이미 `load`돼서 공짜로 제공되고 있고, `Math module`을 이용하여 `무작위`로 명언을 보여주는 요소를 구현하였다

* `Math.random()` 은 `0 ~ 1`사이의 랜덤 숫자를 무작위의 값을 반환한다. (소수점으로) `0~10` 사이의 랜덤한 숫자를 보고 싶으면 저기에 * 0 을 하면 된다.
  * **Math.random() * 10;** : 3.2325817958 로 나옴

* 이때, 뒤에 있는 소수점을 없애 정수로 만들어주고 싶다면, 세 가지의 방법이 있다.
  * **Math.ceil()** : 소수점 첫째자리에서 올림
  * **Math.round(1.0001)** : 반올림
  * **Math.floor(1.0001)** : 내림.(뒤에 소수점 무시해줌!!)

* 명언과 저자의 정보를 담은 객체를 만들고 `quotes`라는 `array`에 각 객체들을 저장하였고, 무작위로 `array`의 요소 중 한가지를 뽑아 `html.innerText`로 명언과 저자를 업데이트한다.
  >[1,2,3,4,5] 이렇게 생긴 `array`가 있을 때, `Array.length`를 사용하면 `Array`의 길이를 반환해준다.

#### 전체적인 흐름설명

* `const quotes = [ ] ;` **:** 명언을 담을 변수 생성한다 방법은 `{quote: "" , author: "" ,}` **:** 객체 형태로 명언과 작가 저장하였고, 그리고 `const quote` 와 `const author` 로 `HTML` 요소 선택한다. 첫 번째 `span` 을 선택할 때는 `#quote span:first-child` 로 적어준다.

* 랜덤으로 `quotes` 안에 있는 객체들을 선택할 것이다. `quotes` 에 있는 객체들은 **quotes[0] , quotes[1]** 식으로 불러올 수 있다. 이때 랜덤으로 숫자들을 지정해주고 싶으면 **math.random() 함수** 사용한다. 

* `todaysQuote`라는 변수 만들고, 그 안에 quotes[Math.floor(Math.random()*quotes.length)];
넣어준다. 그리고 `quote` 와 `author` 의 `innerText` 변경한다.

* `todaysQuote.quote`으로 명언을 가져오고, `todaysQuote.author`로 작가를 가져온 다음 `quote`와 `author` 변수에 넣어준다.


```JavaScript
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

```

#### 10초 마다 명언을 변경하기
 
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

## 📍 02 - Background


* `const image` 변수명을 해주고 `[]`룰 사용해서 배열을 한다. `img`폴더에 있는 이미지들이랑 이 `images Array`안의 이름이 똑같이 해야한다 안그러면 이미지를 불러올수 없게 때문이다. 

* `const chosenImage` 변수명을 해주고 위에 있는 `images` 를 불러온다. `[]` 안에는 이전에 `quote`와 동일한 방법으로 `image` 정보를 담고 있는 `array`를 만들고, 무작위 `index`를 통해 하나의 `image`를 선택한 후 `img tag`를 생성하여 선택된 `img`의 경로를 추가하여 구현하였다.

* `javascript`에서 이미지를 만들고 이걸` html`에 추가해야 한다. `const bgImage` 변수명을 만들고 `document.createElement("img")`를 사용한다. 괄로 안에는 `img` 라는 `element`를 생성한다.
  >document.createElement("element") : element의 요소를 document에 추가한다. 

* `bgImage.src`은 이미지 경로를 적어준다. 그리고 `${chosenImage}`을 사용하여 이미지를 선택하게 해준다. 

* document.body.appendChild("element") : body에 element를 추가한다. 
  >JS를 통해서 body에 html tag를 만듦.


```javascript
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `src/img/${chosenImage}`;

document.body.appendChild(bgImage);
```







