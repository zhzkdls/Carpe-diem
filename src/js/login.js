const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form")

const link = document.querySelector("a")

  function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
  }

  function handleLinkClick(event) {
    alert("Clicked!!");
  } 

loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click", handleLinkClick);
