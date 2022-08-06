# 📝 section - WEATHER
<br>
<br>

 
## 📍 01 - Geolocation

* **1** `navigator` 함수를 이용해 사용자의 위치를 알아내는 코드 작성한다.

* **2** `navigator.geolocation.getCurrentPosition()` 라는 코드를 작성해준다. 이때 `getCurrentPosition` 은 `2개`의 `argument`가 필요하다. 앞쪽에는 모든 게 잘 됐을 때 실행될 함수인 `onGeoOk` 함수를, 뒤에는 실패했을 때 실행될 함수인 `onGeoError` 함수를 입력한다.

* **3** `onGeoError()` 함수가 실행될 때에 에러가 났다는 것을 사용자에게 알려주기 위해서 `alert`("Can't find you. No weather for you."); 를 해준다.

* **4** `onGeoOk` 함수가 실행될 때 `javascript`가 `position`으로 `user`의 위치를 전달해준다.` position`은 `object` 이고 위도와 경도 값이 들어있다. `positon.coords.latitude`와 `position.coords.longitud`e 를 변수에 저장하고 `console.log`를 해서 사용자에게 보여준다.


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


## 📍 01 - Weather API 



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