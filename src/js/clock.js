const time = document.querySelector(".time");
const today = document.querySelector(".today");

function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = now.getDay();

    const weekDay = ['일', '월', '화', '수', '목', '금', '토'];

    today.innerText = `${year}년 ${month}월 ${date}일 (${weekDay[day]})`;

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    time.innerText = `${hours}:${minutes}:${seconds}`;
}

updateTime();
setInterval(updateTime, 1000);