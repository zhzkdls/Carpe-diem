# π section - WEATHER
<br>
<br>

 
## π 01 - Geolocation

* **1** `navigator` ν¨μλ₯Ό μ΄μ©ν΄ μ¬μ©μμ μμΉλ₯Ό μμλ΄λ μ½λ μμ±νλ€.

* **2** `navigator.geolocation.getCurrentPosition()` λΌλ μ½λλ₯Ό μμ±ν΄μ€λ€. μ΄λ `getCurrentPosition` μ `2κ°`μ `argument`κ° νμνλ€. μμͺ½μλ λͺ¨λ  κ² μ λμ λ μ€νλ  ν¨μμΈ `onGeoOk` ν¨μλ₯Ό, λ€μλ μ€ν¨νμ λ μ€νλ  ν¨μμΈ `onGeoError` ν¨μλ₯Ό μλ ₯νλ€.

* **3** `onGeoError()` ν¨μκ° μ€νλ  λμ μλ¬κ° λ¬λ€λ κ²μ μ¬μ©μμκ² μλ €μ£ΌκΈ° μν΄μ `alert`("Can't find you. No weather for you."); λ₯Ό ν΄μ€λ€.

* **4** `onGeoOk` ν¨μκ° μ€νλ  λ `javascript`κ° `position`μΌλ‘ `user`μ μμΉλ₯Ό μ λ¬ν΄μ€λ€.` position`μ `object` μ΄κ³  μλμ κ²½λ κ°μ΄ λ€μ΄μλ€. `positon.coords.latitude`μ `position.coords.longitud`e λ₯Ό λ³μμ μ μ₯νκ³  `console.log`λ₯Ό ν΄μ μ¬μ©μμκ² λ³΄μ¬μ€λ€.


```javascript
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```


## π 01 - Weather API 



```javascript
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```