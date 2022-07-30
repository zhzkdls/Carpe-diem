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

* input을 필수입력 항목으로 만들어 줄수 있어. 또는 input 자체적으로 최대 글자수를 15로 조절할수도 있지. 이런 식으로 할수 있고. 이건 HTML 이 이미 우리를 위해 해주고 있어. 문제는 로그인을 클릭할 떄 HTML에서 확인 작업을 안하고 있어. 그 이유는 이 부분이 form이 아니기 때문이야.

* input의 유효성 검사를 작동시키기 위해서는 input이 form안에 있어야 된다는 걸 기억해야한다. 근데 여기서 문제가 하나 발생하게 된다. (4분 50초 부터 다시 듣자 오늘은 피곤해서 여기까지~~!!)


```JavaScript

<input
    required
    maxlength="15" 
    type="text" 
    placeholder="이름을 적어주세요" />
<input 
    type="submit" 
    value="Log In" />

```
















<!-- * 1.js를 쓰는것도 낫벳 but
HTML에 이미 구현된 기능(인풋의 유효성검사)이 있으니 그걸 쓰자
근데 HTML에서 input의 유효성검사를 하기위해서는, 인풋이 form 태그 안에 들어가있어야 함
>따라서 div를 form으로 수정

2.근데 form 태그 안에 들어있는 button을 누르거나, type이 submit인 input을 클릭하면,(+폼안에 들어가 있는 인풋에서 엔터를 누르면?) 내가 작성한 form이 submit됨.
*이건 HTML/CSS 강의를 한번들어보고 확인해봐야할듯!!(form이 submit된다는게 무슨말????form부분만 바뀐다는건지?..)
>암튼 문제는 form이 submit되면서 내용이 날라가서 user정보를 저장할 수가 없게 됨!

3.따라서 form이 submit되어서 새로고침 되는것을 막아줄 것임!

* 15.but form이 submit될때마다 새로고침이 되기때문에 이것은 우리가 원하는게 아니다. 그러한 문제 때문에 form이 submit 되는걸 막아줄것임
14.*규칙 form안에 input을 쓰고 엔터나 submit을 누르면 자동으로 제출됨. click이 필요없고 form을 submit하는것이 중요.->브라우저가 새로고침 하지 않고 user정보를 저장하도록 하고싶은것
13.12처럼 html요소에 submit을 넣었기때문에 더이상 addEventListner가 필요하지 않다. 입력후에 클릭이 아닌 엔터를 눌러도 form은 submit이 되기때문 *반드시 form안에 input을 넣어야함
12.html에가서 button을 없애고 input type을 submit value값에 login을넣는다
11.현재 필드값을 입력하지 않으면 요청이 들어오고 문자는 15자 이상을 쓸수 없게됨. 그리고 입력을하고 버튼을 누르면 새로고침이 실행되고 값이 사라짐.
10.if else 문은 선호하는 방식이 아니라서 지우고 html에 input 창에 requird를 적고 maxlength="15"를 적는다. if else 문 없에고 username에 대한 값을 console.log에 넣는다 아직 username을 받는단걸 확인 하기 위해
9.username.length를 통해서 string의 길이를 구한다. > 15를 통해서 username의 길이가 15보다 길다면이라는 조건설정을 해준다.
8.문자를 입력하지 않았을때 please wirte your name 이라 하고 문자를 입력했는데 15글자를 넘어서면 안됨 그렇담 string의 길이를 어떻게 알 수 있을까? ->
7.console.log를 유저가 볼 수 있게 alert로 바꾸자
6.console.log("hello",loginInput.value)를 const value = loginInput.value로 변수에 할당 해준다. + if 문을 통해서 value값이 없을떄 다음과같이 행동.
5.username의 유효성 검사 뜻 -> 조건에 유효한지 검사 비어서도 안되고 너무 길어서도 안되는 문자를 만든다.
4.("hello",loginInput.value)를 통해서 (hello loginInput.value값을 얻는다) ->단 hello를 한후 값을 입력안하면 아무것도 뜨지 않음 이것을 if else를통해 해결해보자
3.클릭했을때 함수를 쓰고 loginInput에 대한 value값을 얻는다. value값이란 input창에 다다다다적으면 다다다다라는 값이 나옴. console.log(loginInput.value)
2.dir을 통해서 loginInput의 내부를 보여준다
1.클릭 이벤트를 통해서 클릭에 대한 작동이 됨
console.dir(loginInput) ->console.log(loginInput.value)

모르는 지식
태그의 required 속성은 폼 데이터(form data)가 서버로 제출되기 전 반드시 채워져 있어야 하는 입력 필드를 명시합니다.
required 속성이 제대로 동작하는 요소의 type 속성값은 다음과 같습니다.
- checkbox, date, email, file, number, password, pickers, radio, search, tel, text, url
required 속성은 불리언(boolean) 속성입니다.
불리언 속성은 해당 속성을 명시하지 않으면 속성값이 자동으로 false 값을 가지게 되며, 명시하면 자동으로 true 값을 가지게 됩니다.

* input 의 유효성 검사를 작동시키기 위해, input은 form태그 안에 반드시 있어야 한다.

input 안의 button 클릭 or 'type= submit'인 input 클릭하면
form이 자동으로 submit 된다! form이 자동으로 submit된다!
엔터를 눌러도 submit되고! 어떻게든 submit되기 때문에 click은 더 이상 신경 쓰지 않아도 된다.

"form 안에서 엔터를 누르고 더 이상 input이 없다면 자동으로 submit된다"

자동으로 submit 되길 원하면 form태그 안에 input을 넣으면 된다.(이때, input 안에 있는 버튼 or type이 submit인 input이기만 하면 된다.) 이렇게 되면 계속 페이지가 새로고침 되면서 사용자가 input에 넣은 정보들이 증발해버린다는 !!!단점!!!이 있다.
이 단점을 보완해, input의 정보를 submit되지 않게 잡아주려면 어떻게 할까?

* (나를 위한 노트)
5:15
div-> form 으로 바꾼 이유가 여기서 드러난다.
1. 를 으로 바꾸지 않아도 의 maxlength 는 html 에서 도와주지만, 'required'라는 browser 의 기능을 쓸수없다 (코코아 클론코딩 참고)
2. 으로 바꾸면, 엔터키를 누르건 버튼을 누르건 (의 기본값이 submit.) 무조건 'submit' 이 일어남.
근거: console.log(loginInput.value) 가 실행이 안됨 + browser 가 새로고침을 한다.
3. 우리의 목적: user's input 을 submit 했을때 그 value 를 당장 쓰고 싶다. (새로고침을 멈춘다)
ㄴ> 해결 방법을 #4.2에서 다룬다

```JavaScript

const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  console.log("hello", loginInput.value);
  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);

``` -->
