const remainTime = document.querySelector("#data-time");

function dyDay() {
  const masTime = new Date("2022-12-25");
  const todayTime = new Date();

  const dy = masTime - todayTime;

  const dyDay = Math.floor(dy / (1000 * 60 * 60 * 24));
  const dyHour = Math.floor((dy / (1000 * 60 * 60)) % 24);
  const dyMin = Math.floor((dy / (1000 * 60)) % 60);
  const dySec = Math.floor((dy % (1000 * 60)) / 1000);

  remainTime.innerText = `${dyDay}일 ${dyHour}시간 ${dyMin}분 ${dySec}초`;
}

dyDay();
setInterval(dyDay, 1000);