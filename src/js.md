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

* **변경 후** : value는 보이지 않지만 input에 데이터를 적으면 콘솔창에서 value(글자)가 입력되는 것을 볼 수 있다.

```JavaScript

function onLoginBtnClick() {
  console.log("hello", loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);

```

## 📍 02 - Form Submission 

* 매번 loginInput.value를 적는 것 대신에 우리는 이걸로 변수로 만들어 줄꺼야 좋아 이제 value 값이 없을 경우 if문을 사용하여 클릭을 하면 콜솔을 사용해서 메시지를 나타나게 하자. 

```JavaScript

function onLoginBtnClick() {
  const value = loginInput.value;
  if (value == ""){
    console.log("당신의 이름을 입력하세요");
  }
}

loginButton.addEventListener("click", onLoginBtnClick);

```

* 이제 이걸 user가 볼수 있게 alert로 바꿔주자

```JavaScript

function onLoginBtnClick() {
  const value = loginInput.value;
  if (value == ""){
    alert("당신의 이름을 입력하세요");
  }
}

loginButton.addEventListener("click", onLoginBtnClick);

```

* 이번에는 여기에 else if 를 해주고 value를 확인할거야 suer 가 입력한 username을 뜻하는 value 말이지 변수명을 username으로 바꾸고 여기서 username이 15글자를 초과하지 않는지 확인할 수 있어
즉 username이 15글자르 초과한다면 경고창을 보여줄꺼야 

* username.length가 string의 길이를 구할수 있어 즉 string 다음에 .length만 입력해 주면 되는거야

* 만약 username의 길이가 15보다 길다면, 이름이 너무 길다고 alert을 해줄꺼야 

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


* input을 필수입력 항목으로 만들어 줄수 있다. 또는 input 자체적으로 최대 글자수를 15로 조절할수도 있다.

* HTML에 이미 구현된 기능(인풋의 유효성검사)이 있으니 그걸 사용하면 된다. input의 유효성 검사를 작동시키기 위해서는 input이 form안에 있어야 된다는 걸 기억해야한다.
>따라서 div를 form으로 수정

* form 태그 안에 들어있는 button을 누르거나, type이 submit인 input을 클릭하면 내가 작성한 form이 submit된다. 즉 엔터키를 누르건 버튼을 누르건 (의 기본값이 submit.) 무조건 'submit' 이 일어난다.
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