const loginInput = document.querySelector("#login-form input");

const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const username = loginInput.value;
  if (username === ""){
    alert("당신의 이름을 입력하세요");
  } else if (username.length > 15) {
    alert("이름이 너무 길어!");
  }
}

loginButton.addEventListener("click", onLoginBtnClick);

