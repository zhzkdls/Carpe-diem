# π section - LOGIN 
<br>
<br>

 
## π 01 - Input Values

* **querySelector()** λ₯Ό μ¬μ©ν  λλ λμμ΄ `id`μΈμ§ λͺνν ν΄μ€μΌ νλ€. μλνλ©΄ `querySelector()`λ‘λ `classname`, `tagname` λͺ¨λ κ²μ κ°λ₯νλκΉ. νμ§λ§ `getElementById()`λ₯Ό μ¬μ©ν  λλ κ·Έλ΄ νμκ° μλ€. **WHY??** `JavaScript`κ° `id`λ₯Ό μ°Ύκ³  μλ€λ κ±Έ μ΄λ―Έ μκ³  μκΈ° λλ¬Έμ΄λ€.

* μ΄μ  `input`μ΄λ `button`μ κ°μ Έμ€λκ²μ μμλ³΄μ. `const loginInput`μ μμ±ν λ€μμ `document`μμ μ°Ύλ λμ μ μμ μμ±ν `loginForm`μμ κ²μμ νλκ² λ€μμΌλ‘ ν  μΌμ `input`κ³Ό `button`μ μ°Ύλ μΌμΈλ°, μ΄κ±Έ `document`κ° μλ `loginForm`μμμ λ°λ‘ μ°Ύμ μ μμ΅λλ€.

* λ³΄λ€μνΌ `loginForm`μ `HTML element`κ±°λ . μ¦, `HTML element`μμ λ°λ‘ κ²μ κ°λ₯νλ€λ λ»μ΄λ€ μ’ λ μ λ°μ‘°μ¬κ° κ°λ₯νλ€λ λ»μ μλ―Έν©λλ€.

* `login-Form`μ΄λΌλ `id`λ₯Ό μ°Ύμκ³ , κ·Έλ¦¬κ³  κ·Έ μμμ `input`κ³Ό `button`μ μ°Ύλλ€.

```JavaScript

const loginForm = document.getElementById("login-form");

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

```

* λ μ§§κ² μ½λλ₯Ό μμ±νκΈ° μν λ°©λ²μΌλ‘ λ μ²« μ€μ μ§μ°κ³  λ°λ‘ `querySelector("#login-form-input/button")`λ‘ λ³κ²½νκ³  κ·Έλ¦¬κ³  λ μ μΌ μμ `document`λ‘ λ³κ²½ν΄μΌνλ€. μ΄λ λ― `document` λλ νλμ `element`μ ν΅ν΄μ κ²μμ΄ κ°λ₯ν΄. **μ€μ§ ν elementμμμ μ°Ύμ μ μμ΄.**

```JavaScript

const loginInput = document.querySelector("#login-form-input/button");

const loginButton = document.querySelector("#login-form-input/button");

```


* `click event`λ `loginButton`μ μ°κ²°νλ€μ `function`μ λ§λ€μ΄μΌ ν©λλ€.

* `input`μ μλ ₯νλ μ΄`value`λ₯Ό μ»κ³  μΆμΌλ©΄ μκΉ λ§λ€μ΄ λ `loginInput`μ μ½μμ λ£μ΄μ νμΈνλ©΄ `value` μ΄ λμ€κ² λλ€.


```JavaScript

function onLoginBtnClick() {
  console.dir(loginInput);
  console.log("hello");
}

loginButton.addEventListener("click", onLoginBtnClick);

```

* **λ³κ²½ ν** : `value`λ λ³΄μ΄μ§ μμ§λ§ `input`μ λ°μ΄ν°λ₯Ό μ μΌλ©΄ μ½μμ°½μμ `value`(κΈμ)κ° μλ ₯λλ κ²μ λ³Ό μ μλ€.

```JavaScript

function onLoginBtnClick() {
  console.log("hello", loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);

```

## π 02 - Form Submission 

* λ§€λ² `loginInput.value`λ₯Ό μ λ κ² λμ μ μ°λ¦¬λ μ΄κ±Έλ‘ λ³μλ‘ λ§λ€μ΄ μ€κΊΌμΌ μ’μ μ΄μ  `value` κ°μ΄ μμ κ²½μ° `if`λ¬Έμ μ¬μ©νμ¬ ν΄λ¦­μ νλ©΄ μ½μμ μ¬μ©ν΄μ λ©μμ§λ₯Ό λνλκ² νμ. 

```JavaScript

function onLoginBtnClick() {
  const value = loginInput.value;
  if (value == ""){
    console.log("λΉμ μ μ΄λ¦μ μλ ₯νμΈμ");
  }
}

loginButton.addEventListener("click", onLoginBtnClick);

```

* μ΄κ±Έ `user`κ° λ³Όμ μκ² `alert`λ‘ λ°κΏμ£Όμ..

```JavaScript

function onLoginBtnClick() {
  const value = loginInput.value;
  if (value == ""){
    alert("λΉμ μ μ΄λ¦μ μλ ₯νμΈμ");
  }
}

loginButton.addEventListener("click", onLoginBtnClick);

```

* `else if` λ₯Ό ν΄μ£Όκ³  `value`λ₯Ό νμΈνλ€ `user` κ° μλ ₯ν `username`μ λ»νλ `value` λ§μ΄μ§, λ³μλͺμ `username`μΌλ‘ λ°κΎΈκ³ , μ¬κΈ°μ `username`μ΄ `15κΈμ`λ₯Ό μ΄κ³Όνμ§ μλμ§ νμΈν  μ μλ€. μ¦ `username`μ΄ 15κΈμλ₯΄ μ΄κ³Όνλ€λ©΄ κ²½κ³ μ°½μ λ³΄μ¬μ€λ€. 

* `username.length`κ° `string`μ κΈΈμ΄λ₯Ό κ΅¬ν μ μμ΄ μ¦ `string` λ€μμ `.length`λ§ μλ ₯ν΄ μ£Όλ©΄ λλ€.

* λ§μ½ `username`μ κΈΈμ΄κ° 15λ³΄λ€ κΈΈλ€λ©΄, μ΄λ¦μ΄ λλ¬΄ κΈΈλ€κ³  `alert`μ ν΄μ€λ€. 

```JavaScript

function onLoginBtnClick() {
  const username = loginInput.value;
  if (username === ""){
    alert("λΉμ μ μ΄λ¦μ μλ ₯νμΈμ");
  } else if (username.length > 15) {
    alert("μ΄λ¦μ΄ λλ¬΄ κΈΈμ΄!");
  }
}

loginButton.addEventListener("click", onLoginBtnClick);

```


* `input`μ νμμλ ₯ ν­λͺ©μΌλ‘ λ§λ€μ΄ μ€μ μλ€. λλ `input` μμ²΄μ μΌλ‘ μ΅λ κΈμμλ₯Ό `15`λ‘ μ‘°μ ν μλ μλ€.

* `HTML`μ μ΄λ―Έ κ΅¬νλ κΈ°λ₯(μΈνμ μ ν¨μ±κ²μ¬)μ΄ μμΌλ κ·Έκ±Έ μ¬μ©νλ©΄ λλ€. `input`μ μ ν¨μ± κ²μ¬λ₯Ό μλμν€κΈ° μν΄μλ `input`μ΄ `form`μμ μμ΄μΌ λλ€λ κ±Έ κΈ°μ΅ν΄μΌνλ€.
  >λ°λΌμ divλ₯Ό formμΌλ‘ μμ 

* `form` νκ·Έ μμ λ€μ΄μλ `button`μ λλ₯΄κ±°λ, `type`μ΄ `submit`μΈ `input`μ ν΄λ¦­νλ©΄ λ΄κ° μμ±ν `form`μ΄ `submit`λλ€. μ¦ μν°ν€λ₯Ό λλ₯΄κ±΄ λ²νΌμ λλ₯΄κ±΄ (μ κΈ°λ³Έκ°μ΄ `submit`.) λ¬΄μ‘°κ±΄ **'submit'** μ΄ μΌμ΄λλ€.
  > κ·Όκ±°: console.log(loginInput.value) κ° μ€νμ΄ μλ¨ + browser κ° μλ‘κ³ μΉ¨μ νλ€.
  >μνΌ λ¬Έμ λ formμ΄ submitλλ©΄μ λ΄μ©μ΄ λ λΌκ°μ userμ λ³΄λ₯Ό μ μ₯ν  μκ° μκ² λ¨!


```html
<from id = "login-form">
  <input
      required
      maxlength="15" 
      type="text" 
      placeholder="μ΄λ¦μ μ μ΄μ£ΌμΈμ" />
</from> 
```

```JavaScript
function onLoginBtnClick() {
  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);
```


## π 03 - Events 

#### Events part Oneπ»


* `Form`μμ μλ `input`μ λ²νΌμ λλ₯΄κ±°λ, `enter`λ₯Ό λλ¬μ μ μΆν  λλ§λ€ νμ΄μ§κ° μλ‘κ³ μΉ¨λλ€. λΈλΌμ°μ κ° κΈ°λ³Έμ μΌλ‘ μ€κ³λμ΄ μκΈ° λλ¬Έμ΄λ€. μ΄λ₯Ό λΈλΌμ°μ μ κΈ°λ³Έ νλ. `Browser default`λΌκ³  λΆλ₯Έλ€. 

* `Function(){}` μ΄λ κ² μλΈλλ¨Έμ€ νμμ μ°λ©΄ μ΄ ν¨μκ° μ€νλ  λ λ°μνλ `event`μ λν μλ¬΄λ° μ λ³΄λ μ»μ μ μμ§λ§ `()μμ` κ³΅κ°μ λ§λ€μ΄ μ£Όλ©΄ κ΄νΈμμ `argument`μ μ΄λ¦μΌλ‘ `JS`κ° λ°μν `event`μ λν `μ λ³΄(object)`λ₯Ό μ€λ€.
  * κ΄νμ μΌλ‘, function(event){} μ΄λ κ² μ΄λ€.

* `event.preventDefault();` λΈλΌμ°μ κ° κΈ°λ³Έ λμμ μ€ννμ§ λͺ»νκ² νκ³ , `event object`λ `preventDefaultν¨μ`λ₯Ό κΈ°λ³Έμ μΌλ‘ κ°κ³  μλ€.

* `submit` μ΄λ²€νΈκ° λ°μνλ€λ©΄, `onLoginSubmit`ν¨μλ₯Ό μ€νμν¨λ€λ μλ―Έμ΄κ³ , `JS`λ `onLoginSubmit`ν¨μ νΈμΆμ μΈμλ₯Ό λ΄μμ νΈμΆνκ² λλ€. ν΄λΉ μΈμλ `event object`λ₯Ό λ΄μ μ λ³΄~!!.

* **β μ€μ β** : `form`μ `submit`νλ©΄ λΈλΌμ°μ λ κΈ°λ³Έμ μΌλ‘ νμ΄μ§λ₯Ό μλ‘κ³ μΉ¨ νλλ‘ λμ΄μλ€. νμ§λ§ `preventDefault() `ν¨μλ₯Ό μΆκ°ν¨μΌλ‘μ¨ λΈλΌμ°μ μ κΈ°λ³Έ λμμ λ§μ μ μλ€!!

* `preventDefault` ν¨μλ `EventListener` ν¨μμ 'μ²« λ²μ§Έ `argument`' μμ μλ ν¨μμ΄λ€. μ²«λ²μ§Έ `arument`λ μ§κΈ λ§ λ²μ΄μ§ `event`λ€μ λν μ λ³΄λ₯Ό κ°κ³  μλ€.

* κΈ°λ³Έμ μΌλ‘ `JS`λ `argument`λ₯Ό λ΄μμ ν¨μλ₯Ό νΈμΆνλλ°, `argument`κ° κΈ°λ³Έ μ λ³΄λ€μ μ κ³΅νκ³  μλ€. 
  >λκ° submitμ£Όμ²΄μΈμ§, λͺ μμ submitμ νλμ§ λ±λ± μ½μμ μΆλ ₯ν΄λ³΄λ©΄ μ μ μμ


* `loginForm.addEventListener('submit', onLoginSubmit);` μμ `submit`μ΄ λ°μνλ©΄ μ΄ ν¨μμ μ±κ²©λλ‘ `login input`μ λλ₯΄μλ§μ μλ‘κ³ μΉ¨μ΄ μ€νλλ€. 

* `onLoginSubmit` ν¨μμμ `preventDefault` λ₯Ό μ€νμν€λ©΄, μλ‘κ³ μΉ¨ λλ κ²μ λ§μμ€λ€.
  >λ§€κ°λ³μ(parameter) μ 'event' λΌκ³  λ£κ³  ν¨μ λ΄μ©μ eventμ λνpreventDefault λ₯Ό ν΄μ£Όλ©΄ ν΄λΉνλ eventμ λνμ¬ submitμ κΈ°λ³Έλμμ λ©μΆκ² λλ€.

* `console.log(loginInput.value);` λ₯Ό μμ±νλ©΄ `input`μ μ μλ `value(μ΄λ¦)` μ΄ λμ¨λ€.
  >λ²νΌμ ν΄λ¦­νλ μ¦μ submit λμ΄ μλ‘κ³ μΉ¨ (μ λ³΄ μ¦λ°)λλ κ²μ λ§κ³  μ μ μ μ΄λ¦μ μ μ₯νκΈ° μν΄μ preventDefault κ° μ¬μ©λλ€.


```javascript

const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form")


  function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
  }

loginForm.addEventListener("submit",onLoginSubmit);

```

#### Events part Twoπ»

* `nomadcoders.co`λ‘ μ°κ²°λλ `anchor`μμλ₯Ό νλ λ§λ€μ΄ μ€κ±°μΌ. κ·ΈλΌ λΈλ§λ μ½λ μ¬μ΄νΈλ‘ μ΄λνκ² λλ€. μ λ€μ νλ² `js`λ₯Ό μ΄μ©ν΄μ κΈ°λ³Έ λμμ λ§μλ³΄μ~!!! μ μλ§νλ―μ΄ `js`λ μ°λ¦¬κ° κΈ°λ³Έ λμμ λ§λ κ²μ νμ©ν΄ `part One`μμλ `from` μ κΈ°λ³Έ λμμ `submit`μ΄λΌλ κ±Έ λ°°μ μ΄. κ·ΈλΌ λ§ν¬μ κΈ°λ³Έ λμμ λ­κΉ
  >λ§ν¬μ κΈ°λ³Έ λμμ ν΄λ¦­μ λ€λ₯Έ νμ΄μ§λ‘ μ΄λνλ€.

```html

<a href="http://nomadcoders.co">κ°μ¦μ~!!</a>

```

* `link`λΌλ λ³μλ₯Ό λ§λ€κ³ , `string`μ "a" λ‘ μμ±νκ³  λ§ν¬λ₯Ό μ°Ύλλ€. κ·Έλ¦¬κ³  `alert("Clicked!!")`λ§ μΆκ°νλ€. κ·Έλ¦¬κ³  λμ λ€μ νλ©΄μμ μλ‘κ³ μΉ¨μ νκ³  λ§ν¬λ₯Ό ν΄λ¦­νμλ `Clicked`λΌκ³  `alert`μ΄ νμλκ³ , `alert`μ΄ `page`κ° λ€λ₯Έ λμμ νμ§ λͺ»νλλ‘ λ§κ³  μλ€. κ·Έλμ μλ¬΄μΌλ μΌμ΄ λμ§ μμ§λ§, `OK`μ ν΄λ¦­νλ©΄ `alert`μ΄ μμ΄μ§λ©΄μ λΈλΌμ°μ μ κΈ°λ³Έ λμμ΄ μ€νλλκ±Έ λ³΄κ² λλ€.

```javascript

const link = document.querySelector("a")

  function handleLinkClick(event) {
    alert("Clicked!!");
  } 

link.addEventListener("click", handleLinkClick);


```

## π 04 - Getting Username 

* CSSλ₯Ό λ³΄λ©΄ .hiddenμ΄ μλλ° μ΄ classμ μ­ν μ display: none μ¦ μμλ₯Ό μ¨κΈ°λ κΈ°λ₯μ΄λ€.

```css
.hidden {
  display: none;
}
```

* `loginForm.classList.add(HIDDEN_CLASSNAME);` **->** `hidden`μ΄λΌλ `class` `name`μ λν΄μ€μ `from`μ μ¨κΈ°κ³ , μ μ μ΄λ¦μ λ³μλ‘ μ μ ν΄μ£Όκ³  κ·Έμ΄λ¦μ `h1`μμ λ£μ΄μ€λ€. μΌλ¨ μ¬κΈ°μ `greeting`μ΄λ `id`λ₯Ό μΆκ°ν΄μ€λ€. `js`μμ μ΄ `id`λ₯Ό μ°Ύμμ€λλ€. `const greeting`μ΄λΌλ λ³μλ₯Ό μμ±ν΄μ£Όλ©΄ λλ€. μ΄μ  `h1`μ κ°μ Έλ€κ° λ­ ν κ±°λλ©΄ `h1` μμλ€κ° `greeting`μ μλ νμ€νΈλ₯Ό μΆκ°νλ€.

* `HTML`μ μ΄λ ν λΆλΆμ μ‘κ³  κ±°κΈ°μ `class` λ₯Ό μΆκ°νκ±°λ λΉΌκ³  μΆμ λλ
  >classList.add.('classname') <br>
  >classList.remove.('classname') λ₯Ό μ¬μ©νλ€. 
  * ν΄λμ€λ₯Ό λ§μλλ‘ λΆμλ€ λ μ μκ² ν΄μ€λ€. μμμλ `display:none;`μ΄ λμ΄ μκΈ° λλ¬Έμ ν΄λΉ `html` νκ·Έλ₯Ό `hide` or `show` ν  μ μλ€

* const HIDDEN_CLASSNAME = 'hidden';
  >κ΄μ΅: stringλ§ ν¬ν¨λ λ³μλ λλ¬Έμλ‘ μ΄λ€ + μ€μν λ³μκ° μλλΌ μ.

* λ³μμ `string`μ `κ²°ν©`νκ³  μΆκ±°λ λλ λ³μλ₯Ό `string`μμ `μ§μ΄λ£κ³ ` μΆλ€λ©΄ μ΄ λκ°μ§λ₯Ό μ ννλ©΄ λλ€. 
'hello!' + username + nice to meet you!; λ
`hello ${username} nice to meet you `; μ κ°μΌλ©° νμμ λ°©λ² μ¬μ©νμ. κ°μ₯ μ€μν κ²μ νμλ°©λ²μΈλ° μ΄κ²μ μ¬μ©ν λ €λ©΄ `λ°±ν±`μ΄λΌλ κΈ°νΈλ₯Ό μ¬μ©ν΄μΌνλ€`(``)`


* **μμ½** 
  * ν΄λ¦­νλ©΄, μλμΌλ‘ μλ‘κ³ μΉ¨ λμ΄ μ λ³΄κ° λ μκ°λ κ²μ λ§κ³ (preventDefault();)
  * loginFormμ κ°μΆκ³ (hidden)
  * hidden λλ A λ¬Έκ΅¬κ° λνλκ³ (remove hidden)
  * A λ¬Έκ΅¬μ usernameμ ν©μ³μ μμ ν λ¬Έκ΅¬λ₯Ό μμ±νλ€.

```html
<h1 id="greeting" class="hidden"></h1>
```


```javascript
const loginForm = document.querySelector("#login-form");

const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";

  function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    
    greeting.innerText = `μλ ${username} λ λ§λμ λ°κ°μμ `;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }


loginForm.addEventListener("submit", onLoginSubmit);
```

## π 05 - Saving Username

* `setItem`μ νμ©νλ©΄ `local storage`μ μ λ³΄λ₯Ό μ μ₯ν  μ μλ€. `console`λ‘ μμ `local Storage.setItem`μ΄λΌκ³  μμ±νκ³  μ μ ν  κ°μ μ΄λ¦μ μ ν΄μ€λ€. μλ₯Ό λ€λ©΄ `"username"` κ·Έ λ€μμ μ μ₯ν  κ°`("λ£¨νΌ")`μ μ μ΄μ£Όκ³ , μν°νλ©΄ μ΄ νμ€μ μ½λλ₯Ό μ€ννλ©΄ `DB`μλ μλ‘μ΄ ν­λͺ©μ΄ μλ€. λΉμ°νκ±°μ§λ§ κ°μ μ μ₯νκ³  λ λ€μμλ λΉμ°ν κ·Έ κ°μ λΆλ¬μ¬μκ³  μκ³ , νμν κ²½μ° μ μ₯λ κ°μ μ§μΈ μλ μλ€.

* `local storage`λ `browser`μμ μ κ³΅νλ `DB`λ‘ `key:value`λ‘ λ°μ΄ν°λ₯Ό μ μ₯νλ€.

  ```javascript
  localStorage.setItem("key","value")   // κ°μ μ μ₯
  localStorage.getItem("key")           // κ°μ λΆλ¬μ΄
  localStorage.removeItem("key")        // λ°μ΄ν°λ₯Ό μ­μ 
  ```

* μΆν `local storage`μ μ μ₯λ κ°μ΄ μλ€λ©΄, `login form`μ λ€μ λ³΄μ¬μ£Όμ§ μκ³  λ°λ‘ `greeting` λ¬Έκ΅¬λ₯Ό λμ΄λ€. λ§μ½ `local storage`μ `username`μ΄ μ μ₯λμ΄μμ§ μλ€λ©΄ `login form`μ λ³΄μ¬μ£Όμ΄ `username`μ μλ ₯λ°μ κ°μ μ μ₯νλ€

* `κ΄λ‘()`μμ μ°μ  μ μ₯λ  κ°μ μ΄λ¦`(key)`λ₯Ό μ ν΄μ£Όκ³ , κ·Έ λ€μμλ κ°μΈ `username`μ μ μ΄μ£Όλ©΄ λλ€. μμλ μ μ₯λ  μμ΄νμ μ΄λ¦μ΄κ³ , λ€μλ κ°μ `username` λ³μμ΄λ€. `local storage`μ `key : username`, `value : λ£¨νΌ` μ΄λΌκ³  μλ ₯μ΄ λλ€. 
  >κ·Έλ°λ° μμ§λ~!! μλ‘κ³ μΉ¨μ νλ©΄ μ¬μ ν μ΄ formμ΄ νμλκ³  μλ€... λ΄κ° λ°λΌλκ±΄ μ΄κ² μλλ° λ§μ΄μ§~!! μ μ΄λ μ΄μ λ μ μ λͺμ κΈ°μ΅νκ³  μλ€.

```JavaScript
localStorage.setItem("username", username);
```

## π 06 - Loading Username


* **01** `string`μ λ°λ³΅ν΄μ μ¬μ©νλ κ²½μ°μ `λ³μλͺ(USERNAME_KEY)`μ μμ±νμ¬ μ¬λ¬λ² μ¬μ©ν μ μλλ‘ νλ€. λν μ€νλ₯Ό λ°©μ§ ν μ μλ€. 

* **02** λ§μ½ `savedUsername` κ°μ΄ `null` μΌ κ²½μ°, μ¦ `local Storage`μ μ μ μ λ³΄κ° μμ λ, `classList.remove`μ μΆκ°νλ€. κ·ΈλΌ λ€μμ `addEventListener`λ₯Ό μΆκ°ν΄ μ€λ€.

* **03** λ€μ μ€λͺνμλ©΄ λ§μ½ μ μ μ λ³΄κ° `local Storage` μ μλ€λ©΄ `local Storage`λ `null`κ°μ λ°ννλ€. κ·Έλμ λ§μ½ `savedUsername` κ°μ΄ `null`μ΄λΌλ©΄ `form`μ `hidden classλͺ`μ μ§μμ€λ€. μλνλ©΄ μ§κΈμ `form`μ΄λ `h1` λͺ¨λ `hidden`μ΄λΌλ `class`λ₯Ό κ°μ§κ³  μμνκΈ° λλ¬Έμ΄λ€.

* **04** νλ©΄μ κ°μ μλ‘κ³ μΉ¨μ νλ©΄ λ³΄λ€μνΌ `form`μ νμλκ³  `h1`μ μ¨κ²¨μ§ μνκ° μ μ§λκ³  μλ€. μλνλ©΄ μ§κΈ `local Storage`μλ μ μ μ λ³΄κ° μλ€. κ·ΈλΌ μ΄μ  λ‘κ·ΈμΈμ ν΄λ¦­νλ©΄ μ΄μ μ΄λ λκ°μ΄ μλνκ³  μλ€. μ°¨μ΄μ μ μ΄μ  `local Storage`μ μ μ μ λ³΄κ° μ μ₯λμ΄ μλ€. μ΄μ  μλ‘κ³ μΉ¨νλ©΄ μ΄ μ½λκ° μλνλ©΄ λλλ° μμ§ μ°λ¦¬λ μλ¬΄κ²λ νκ³  μμ§ μλλ€. μ?? μμ§ μ½λλ₯Ό λ μ μμΌλκΉ

* **05** μ΄μ  μ°λ¦¬κ° ν΄μΌν μΌμ `greeting`μ λ³΄μ¬μ£Όλκ±°λ€. `greeting`μ λ³΄μ¬μ£ΌκΈ° μν΄μλ `hidden classλͺ`μ μ κ±°ν΄μ€μΌ νλ€. `greeting.classList.remove`μμ±νκ³  νλ©΄μ κ°μ μλ‘κ³ μΉ¨μ νλ©΄ μ­μ κ° λμ΄μλκ²μ λ³Όμ μλ€. `HTML`μμ `greeting`μ `hidden classλͺ`μ΄ μμ§λ§ `greeting`μ νμ€νΈ λν μλ€. μλνλ©΄ κ·Έ νμ€νΈλ μ°λ¦¬κ° μΆκ°ν΄μ€μΌ νλ€. `greeting.innerText =` `Hello ${username}` μμ±νλ€, νμ§λ§ μ§κΈ μν©μμ `username`μ΄ μ‘΄μ¬νμ§ μμ§?? μ§κΈ μ‘΄μ¬νλ κ²μ `savedUsername`μ΄λκΉ μ΄κ±Έ λ£μ΄μ£Όμ `Hello ${savedUsername}`

* **06** λ¨Όμ  `greeting`μμ νμ€νΈλ₯Ό μΆκ°νκ³ , κ·Έλ° λ€μμ `greeting`ννμ `HIDDEN_CLASSNAME`μ μ κ±°ν΄ μ€λ€. κ·Έλ¦¬κ³  λμ νλ©΄μ κ°μ μλ‘κ³ μΉ¨μ νλ©΄ νμ€νΈκ° μΆκ°λμ΄ μλκ²μ λ³Όμ μλ€. μ΄μ   μ°λ¦¬λ μ μ μ λ³΄λ₯Ό κ°μ§κ³  μλ€.

* **07** λ€μ νμΈν΄λ³΄μ `local Storage`μμ μ μ μ λ³΄λ₯Ό μ§μ°κ³  μλ‘κ³ μΉ¨μ νλ©΄ λ³΄λ€μνΌ λ€μ `form`μ΄ νμλλ€. μλ²½ν΄ νμ§λ§ μμ£Ό μμ λ¬Έμ κ° νλ μμ΄. λκ°μ λμμ λλ² λ°λ³΅νκ³  μλ€λ μ μ΄λ€. `greeting.innerText`λ `greeting.classList.remove`λ₯Ό λ°λ³΅νκ³  μλ€. κ·Έλμ `paintGreetings` λΌλ ν¨μμ λ΄μ©μλ λ°λ³΅λλ λ΄μ©μ μ§μ΄ λ£μΌλ©΄ μ½λ λ μ€ λ μ κ² μΈ μ μλ€.

* **08** λ°©κΈ `username`μ μΈμ§λ‘ λ°λ ν¨μλ₯Ό λ§λ€κ³ , `greeting`μ νμ€νΈ `Hello ${username}`μ μΆκ° ν `hidden class λͺ`μ μ§μμ£Όλ μΌμ νλ€. νμ§λ§ μ°λ¦¬κ° ν¨μλ₯Ό νΈμΆνλ μμΉμ λ°λΌ μ μ μ λ³΄λ λ€λ₯Έ κ³³μμ μ€κ² λλ€.

* **09** μλ₯Ό λ€λ©΄ `local Storage` μ μ μ μ λ³΄κ° μμΌλ©΄ κ±°κΈ°μ μ μ μ λ³΄λ₯Ό λ°μμ μΈμλ‘ λ£μ΄ μ€λ€. λ§μ½ `local Storage` μ μ μ μ λ³΄κ° μλ€λ©΄, μ°λ¦¬λ `form`μ `submit`μΈ κΈ°λ€λ¦¬κ³  `from`μ΄ `submit`λλ©΄ `input`μΌλ‘λΆν° μ μ μ λ³΄λ₯Ό λ°κ³ , `input`μμ λ°μ `user`λ₯Ό κ°μ§ `paintGreetings`λ₯Ό νΈμΆνλ€.

```html
 <!-- form νκ·Έκ° μ¨κΈ°λ κΈ°λ₯μ΄ class="hidden" μ΄λ€ -->
<form class="hidden" id="login-form">
</form>
<h1 id="greeting" class="hidden"></h1>
```

```JavaScript
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
```

#### λ‘κ·ΈμΈ & λ‘κ·Έμμπ»


```javascript

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  loginInput.value = "";
}

function logout() {
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  greeting.innerText = `μλ ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "logout";
  span.appendChild(button);
  greeting.appendChild(span);
  button.addEventListener("click", logout);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}

```