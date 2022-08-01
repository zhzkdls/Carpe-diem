# 📝 section - LOGIN 
<br>
<br>

 
## 📍 01 - Input Values

* **querySelector()** 를 사용할 때는 대상이 `id`인지 명확히 해줘야 한다. 왜냐하면 `querySelector()`로는 `classname`, `tagname` 모두 검색 가능하니깐. 하지만 `getElementById()`를 사용할 때는 그럴 필요가 없다. **WHY??** `JavaScript`가 `id`를 찾고 있다는 걸 이미 알고 있기 떄문이다.

* 이제 `input`이랑 `button`을 가져오는것을 알아보자. `const loginInput`을 작성한 다음에 `document`에서 찾는 대신에 위에 작성한 `loginForm`에서 검색을 하는것 다음으로 할 일은 `input`과 `button`을 찾는 일인데, 이걸 `document`가 아닌 `loginForm`안에서 바로 찾을 수 있습니다.

* 보다시피 `loginForm`은 `HTML element`거든. 즉, `HTML element`안을 바로 검색 가능하다는 뜻이다 좀 더 정밀조사가 가능하다는 뜻을 의미합니다.

* `login-Form`이라는 `id`를 찾았고, 그리고 그 안에서 `input`과 `button`을 찾는다.

```JavaScript

const loginForm = document.getElementById("login-form");

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

```

* 더 짧게 코드를 작성하기 위한 방법으론는 첫 줄은 지우고 바로 `querySelector("#login-form-input/button")`로 변경하고 그리고 또 제일 앞은 `document`로 변경해야한다. 이렇듯 `document` 또는 하나의 `element`을 통해서 검색이 가능해. **오직 한 element안에서 찾을 수 있어.**

```JavaScript

const loginInput = document.querySelector("#login-form-input/button");

const loginButton = document.querySelector("#login-form-input/button");

```


* `click event`는 `loginButton`에 연결한뒤에 `function`을 만들어야 합니다.

* `input`에 입력하는 이`value`를 얻고 싶으면 아까 만들어 둔 `loginInput`을 콘솔에 넣어서 확인하면 `value` 이 나오게 된다.


```JavaScript

function onLoginBtnClick() {
  console.dir(loginInput);
  console.log("hello");
}

loginButton.addEventListener("click", onLoginBtnClick);

```

* **변경 후** : `value`는 보이지 않지만 `input`에 데이터를 적으면 콘솔창에서 `value`(글자)가 입력되는 것을 볼 수 있다.

```JavaScript

function onLoginBtnClick() {
  console.log("hello", loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);

```

## 📍 02 - Form Submission 

* 매번 `loginInput.value`를 적는 것 대신에 우리는 이걸로 변수로 만들어 줄꺼야 좋아 이제 `value` 값이 없을 경우 `if`문을 사용하여 클릭을 하면 콜솔을 사용해서 메시지를 나타나게 하자. 

```JavaScript

function onLoginBtnClick() {
  const value = loginInput.value;
  if (value == ""){
    console.log("당신의 이름을 입력하세요");
  }
}

loginButton.addEventListener("click", onLoginBtnClick);

```

* 이걸 `user`가 볼수 있게 `alert`로 바꿔주자..

```JavaScript

function onLoginBtnClick() {
  const value = loginInput.value;
  if (value == ""){
    alert("당신의 이름을 입력하세요");
  }
}

loginButton.addEventListener("click", onLoginBtnClick);

```

* `else if` 를 해주고 `value`를 확인한다 `user` 가 입력한 `username`을 뜻하는 `value` 말이지, 변수명을 `username`으로 바꾸고, 여기서 `username`이 `15글자`를 초과하지 않는지 확인할 수 있다. 즉 `username`이 15글자르 초과한다면 경고창을 보여준다. 

* `username.length`가 `string`의 길이를 구할수 있어 즉 `string` 다음에 `.length`만 입력해 주면 된다.

* 만약 `username`의 길이가 15보다 길다면, 이름이 너무 길다고 `alert`을 해준다. 

```JavaScript

function onLoginBtnClick() {
  const username = loginInput.value;
  if (username === ""){
    alert("당신의 이름을 입력하세요");
  } else if (username.length > 15) {
    alert("이름이 너무 길어!");
  }
}

loginButton.addEventListener("click", onLoginBtnClick);

```


* `input`을 필수입력 항목으로 만들어 줄수 있다. 또는 `input` 자체적으로 최대 글자수를 `15`로 조절할수도 있다.

* `HTML`에 이미 구현된 기능(인풋의 유효성검사)이 있으니 그걸 사용하면 된다. `input`의 유효성 검사를 작동시키기 위해서는 `input`이 `form`안에 있어야 된다는 걸 기억해야한다.
  >따라서 div를 form으로 수정

* `form` 태그 안에 들어있는 `button`을 누르거나, `type`이 `submit`인 `input`을 클릭하면 내가 작성한 `form`이 `submit`된다. 즉 엔터키를 누르건 버튼을 누르건 (의 기본값이 `submit`.) 무조건 **'submit'** 이 일어난다.
  > 근거: console.log(loginInput.value) 가 실행이 안됨 + browser 가 새로고침을 한다.
  >암튼 문제는 form이 submit되면서 내용이 날라가서 user정보를 저장할 수가 없게 됨!


```html
<from id = "login-form">
  <input
      required
      maxlength="15" 
      type="text" 
      placeholder="이름을 적어주세요" />
</from> 
```

```JavaScript
function onLoginBtnClick() {
  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);
```


## 📍 03 - Events 

#### Events part One💻


* `Form`안에 있는 `input`의 버튼을 누르거나, `enter`를 눌러서 제출할 때마다 페이지가 새로고침된다. 브라우저가 기본적으로 설계되어 있기 때문이다. 이를 브라우저의 기본 행동. `Browser default`라고 부른다. 

* `Function(){}` 이렇게 아노니머스 펑션을 쓰면 이 함수가 실행될 때 발생하는 `event`에 대한 아무런 정보도 얻을 수 없지만 `()안에` 공간을 만들어 주면 괄호안의 `argument`의 이름으로 `JS`가 발생한 `event`에 대한 `정보(object)`를 준다.
  * 관행적으로, function(event){} 이렇게 쓴다.

* `event.preventDefault();` 브라우저가 기본 동작을 실행하지 못하게 하고, `event object`는 `preventDefault함수`를 기본적으로 갖고 있다.

* `submit` 이벤트가 발생한다면, `onLoginSubmit`함수를 실행시킨다는 의미이고, `JS`는 `onLoginSubmit`함수 호출시 인자를 담아서 호출하게 된다. 해당 인자는 `event object`를 담은 정보~!!.

* **★ 중요 ★** : `form`을 `submit`하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. 하지만 `preventDefault() `함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!

* `preventDefault` 함수는 `EventListener` 함수의 '첫 번째 `argument`' 안에 있는 함수이다. 첫번째 `arument`는 지금 막 벌어진 `event`들에 대한 정보를 갖고 있다.

* 기본적으로 `JS`는 `argument`를 담아서 함수를 호출하는데, `argument`가 기본 정보들을 제공하고 있다. 
  >누가 submit주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음


* `loginForm.addEventListener('submit', onLoginSubmit);` 에서 `submit`이 발생하면 이 함수의 성격대로 `login input`을 누르자마자 새로고침이 실행된다. 

* `onLoginSubmit` 함수에서 `preventDefault` 를 실행시키면, 새로고침 되는 것을 막아준다.
  >매개변수(parameter) 에 'event' 라고 넣고 함수 내용에 event에 대한preventDefault 를 해주면 해당하는 event에 대하여 submit의 기본동작을 멈추게 된다.

* `console.log(loginInput.value);` 를 작성하면 `input`에 적었던 `value(이름)` 이 나온다.
  >버튼을 클릭하는 즉시 submit 되어 새로고침 (정보 증발)되는 것을 막고 유저의 이름을 저장하기 위해서 preventDefault 가 사용된다.


```javascript

const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form")


  function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
  }

loginForm.addEventListener("submit",onLoginSubmit);

```

#### Events part Two💻

* `nomadcoders.co`로 연결되는 `anchor`요소를 하나 만들어 줄거야. 그럼 노마드 코더 사이트로 이동하게 된다. 자 다시 한번 `js`를 이용해서 기본 동작을 막아보자~!!! 전에말했듯이 `js`는 우리가 기본 동작을 막는 것을 허용해 `part One`에서는 `from` 의 기본 동작은 `submit`이라는 걸 배웠어. 그럼 링크의 기본 동작은 뭘까
  >링크의 기본 동작은 클릭시 다른 페이지로 이동한다.

```html

<a href="http://nomadcoders.co">가즈아~!!</a>

```

* `link`라는 변수를 만들고, `string`은 "a" 로 작성하고 링크를 찾는다. 그리고 `alert("Clicked!!")`만 추가한다. 그리고 나서 다시 화면에서 새로고침을 하고 링크를 클릭했을때 `Clicked`라고 `alert`이 표시되고, `alert`이 `page`가 다른 동작을 하지 못하도록 막고 있다. 그래서 아무일도 일어 나지 않지만, `OK`을 클릭하면 `alert`이 없어지면서 브라우저의 기본 동작이 실행되는걸 보게 된다.

```javascript

const link = document.querySelector("a")

  function handleLinkClick(event) {
    alert("Clicked!!");
  } 

link.addEventListener("click", handleLinkClick);


```

## 📍 04 - Getting Username 

* 어떤 요소에게든 이 `class` `name`을 주면, 그 요소를 숨김 기능이 발생한다.

```css
.hidden {
  display: none;
}
```

* `loginForm.classList.add(HIDDEN_CLASSNAME);` **->** `hidden`이라는 `class` `name`을 더해줘서 `from`을 숨기고, 유저이름을 변수로 저정해주고 그이름은 `h1`안에 넣어준다. 일단 여기에 `greeting`이란 `id`를 추가해준다. `js`에서 이 `id`를 찾아줍니다. `const greeting`이라는 변수를 작성해주면 된다. 이제 `h1`을 가져다가 뭘 할거냐면 `h1` 안에다가 `greeting`에 있는 택스트를 추가한다.

* `HTML`의 어느 한 부분을 잡고 거기에 `class` 를 추가하거나 빼고 싶을 때는
  >classList.add.('classname') <br>
  >classList.remove.('classname') 를 사용한다. 
  * 클래스를 마음대로 붙였다 뗄 수 있게 해준다. 위에서는 `display:none;`이 되어 있기 때문에 해당 `html` 태그를 `hide` or `show` 할 수 있다

* const HIDDEN_CLASSNAME = 'hidden';
  >관습: string만 포함된 변수는 대문자로 쓴다 + 중요한 변수가 아니라 서.

* 변수와 `string`을 `결합`하고 싶거나 또는 변수를 `string`안에 `집어넣고` 싶다면 이 두가지를 선택하면 된다. 
'hello!' + username + nice to meet you!; 는
`hello ${username} nice to meet you `; 와 같으며 후자의 방법 사용하자. 가장 중요한 것은 후자방법인데 이것을 사용할려면 `백틱`이라는 기호를 사용해야한다`(``)`


* **요약** 
  * 클릭하면, 자동으로 새로고침 되어 정보가 날아가는 것을 막고(preventDefault();)
  * loginForm을 감추고(hidden)
  * hidden 됐던 A 문구가 나타나고(remove hidden)
  * A 문구와 username을 합쳐서 완전한 문구를 완성한다.

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
    
    greeting.innerText = `안녕 ${username} 님 만나서 반가워요 `;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }


loginForm.addEventListener("submit", onLoginSubmit);
```

## 📍 05 - Saving Username

* `setItem`을 활용하면 `local storage`에 정보를 저장할 수 있다. `console`로 와서 `local Storage.setItem`이라고 작성하고 저정할 값의 이름을 정해준다. 예를 들면 `"username"` 그 다음에 저장할 값`("루피")`을 적어주고, 엔터하면 이 한줄의 코드를 실행하면 `DB`에는 새로운 항목이 있다. 당연한거지만 값을 저장하고 난 다음에는 당연히 그 값을 불러올수고 있고, 필요한 경우 저장된 값을 지울 수도 있다.

* `local storage`는 `browser`에서 제공하는 `DB`로 `key:value`로 데이터를 저장한다.

  ```javascript
  localStorage.setItem("key","value")   // 값을 저장
  localStorage.getItem("key")           // 값을 불러옴
  localStorage.removeItem("key")        // 데이터를 삭제
  ```

* 추후 `local storage`에 저장된 값이 있다면, `login form`을 다시 보여주지 않고 바로 `greeting` 문구를 띄운다. 만약 `local storage`에 `username`이 저장되어있지 않다면 `login form`을 보여주어 `username`을 입력받아 값을 저장한다

* `괄로()`안에 우선 저장될 값의 이름`(key)`를 정해주고, 그 다음에는 값인 `username`을 적어주면 된다. 앞에는 저장될 아이템의 이름이고, 뒤에는 값의 `username` 변수이다. `local storage`에 `key : username`, `value : 루피` 이라고 입력이 된다. 
  >그런데 아직도~!! 새로고침을 하면 여전히 이 form이 표시되고 있다... 내가 바라는건 이게 아닌데 말이지~!! 적어도 이제는 유저명은 기억하고 있다.

```JavaScript
localStorage.setItem("username", username);
```

## 📍 06 - Loading Username


* **01** `string`을 반복해서 사용하는 경우에 `변수몀(USERNAME_KEY)`을 작성하여 여러번 사용할수 있도록 한다. 또한 오타를 방지 할수 있다. 

* **02** 만약 `savedUsername` 값이 `null` 일 경우, 즉 `local Storage`에 유저정보가 없을 떄, `classList.remove`을 추가한다. 그럼 다음에 `addEventListener`를 추가해 준다.

* **03** 다시 설명하자면 만약 유저정보가 `local Storage` 에 없다면 `local Storage`는 `null`값을 반환한다. 그래서 만약 `savedUsername` 값이 `null`이라면 `form`의 `hidden class명`을 지워준다. 왜냐하면 지금은 `form`이랑 `h1` 모두 `hidden`이라는 `class`를 가지고 시작하기 떄문이다.

* **04** 화면에 가서 새로고침을 하면 보다시피 `form`은 표시되고 `h1`은 숨겨진 상태가 유지되고 있다. 왜냐하면 지금 `local Storage`에는 유저정보가 없다. 그럼 이제 로그인을 클릭하면 이전이랑 똑같이 작동하고 있다. 차이점은 이제 `local Storage`에 유저정보가 저장되어 있다. 이제 새로고침하면 이 코드가 작동하면 되는데 아직 우리는 아무것도 하고 있지 않는다. 왜?? 아직 코드를 덜 적었으니깐

* **05** 이제 우리가 해야할일은 `greeting`을 보여주는거다. `greeting`을 보여주기 위해서는 `hidden class명`을 제거해줘야 한다. `greeting.classList.remove`작성하고 화면에 가서 새로고침을 하면 삭제가 되어있는것을 볼수 있다. `HTML`에서 `greeting`에 `hidden class명`이 없지만 `greeting`에 택스트 또한 없다. 왜냐하면 그 텍스트는 우리가 추가해줘야 한다. `greeting.innerText =` `Hello ${username}` 작성한다, 하지만 지금 상황에서 `username`이 존재하지 않지?? 지금 존재하는 것은 `savedUsername`이니깐 이걸 넣어주자 `Hello ${savedUsername}`

* **06** 먼저 `greeting`안에 텍스트를 추가하고, 그런 다음에 `greeting`한테서 `HIDDEN_CLASSNAME`을 제거해 준다. 그리고 나서 화면에 가서 새로고침을 하면 텍스트가 추가되어 있는것을 볼수 있다. 이젠 우리는 유저정보를 가지고 있다.

* **07** 다시 확인해보자 `local Storage`에서 유저정보를 지우고 새로고침을 하면 보다시피 다시 `form`이 표시된다. 완벽해 하지만 아주 작은 문제가 하나 있어. 똑같은 동작을 두번 반복하고 있다는 점이다. `greeting.innerText`랑 `greeting.classList.remove`를 반복하고 있다. 그래서 `paintGreetings` 라는 함수의 내용에는 반복되는 내용을 집어 넣으면 코드 두 줄 더 적게 쓸 수 있다.

* **08** 방금 `username`을 인지로 받는 함수를 만들고, `greeting`에 텍스트 `Hello ${username}`을 추가 후 `hidden class 명`을 지워주는 일을 한다. 하지만 우리가 함수를 호출하는 위치에 따라 유저정보는 다른 곳에서 오게 된다.

* **09** 예를 들면 `local Storage` 에 유저정보가 있으면 거기서 유저정보를 받아서 인자로 넣어 준다. 만약 `local Storage` 에 유저정보가 없다면, 우리는 `form`의 `submit`울 기다리고 `from`이 `submit`되면 `input`으로부터 유저정보를 받고, `input`에서 받은 `user`를 가진 `paintGreetings`를 호출한다.

```html
 <!-- form 태그가 숨기는 기능이 class="hidden" 이다 -->
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
