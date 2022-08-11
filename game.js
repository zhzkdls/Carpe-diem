const body = document.querySelector("body"); // 태그를 호출한다.
const btn = document.querySelector("button");

const colors = [
  "#96FFFF	",
  "#B4C3FF",
  "#B7A4EE",
  "#B0A0CD",
  "#3CA0E1",
  "#5A78AF",
  "#91F8D0",
  "#9EF048",
  "#FFCAD5",
  "#FFAAFF",
  "#FFA778",
  "#F06E6E",
  "#975a97",
  "#F49A56",
  "#FF4646"
];

function onClickHandler() {
    const color1 = colors[Math.floor(Math.random() * colors.length)]; // 순서를 랜덤으로 만들기
    const color2 = colors[Math.floor(Math.random() * colors.length)]; 
    body.style.backgroundImage = `linear-gradient(0.25turn, ${color1}, ${color2})`; // 랜덤으로 배열 안의 컬러를 선택한다.
} 
btn.addEventListener("click", onClickHandler); // function 뒤에 ()가 없다.
