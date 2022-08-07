const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector(".greeting");
const logoutBtn = document.querySelector(".btn_logout");
// const toDo = document.querySelector(".todo");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // toDo.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);

    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Have a good day, ${username}😊`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
    // toDo.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}

function onLogout(event) {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
}

logoutBtn.addEventListener("click", onLogout);








// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

// function onLoginSubmit(event) {
//   event.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME);
  
//   const username = loginInput.value;
//   localStorage.setItem(USERNAME_KEY, username);
//   paintGreetings(username);
//   loginInput.value = "";
// }

// function logout() {
//   localStorage.removeItem(USERNAME_KEY);
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   greeting.classList.add(HIDDEN_CLASSNAME);
// }

// function paintGreetings(username) {
//   greeting.innerText = `안녕 ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);

//   const span = document.createElement("span");
//   const button = document.createElement("button");

//   button.innerText = "logout";
//   span.appendChild(button);
//   greeting.appendChild(span);
//   button.addEventListener("click", logout);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if (savedUsername === null) {
//   // show the form
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener("submit", onLoginSubmit);
// } else {
//   // show the greetings
//   paintGreetings(savedUsername);
// }
