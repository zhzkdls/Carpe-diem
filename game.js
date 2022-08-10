// (01) querySelector을 사용해 id 값으로 찾은 h2 요소를 변수에 저장해준다.

const remainTime = document.querySelector("#remain-time");

// (02) 함수를 만들고 2022년 12월 25일 기준과 현재를 기준으로 변수 2개를 만든다.

// (03) diff 변수를 두어 위에서 선언한 2개의 변수를 빼준다.

// (04) diff 변수를 날짜, 시간, 분, 초에 맞게 나눠준 후에 Math.floor()을 사용한다.

// (설명) 위에서 언급했듯이 "밀리세컨드 단위" 로 출력이 된다. 그럼 우리는 밀리세컨드 단위를 사용해 날짜, 시간, 분, 초를 가지고 와야 한다. 밀리세컨드 단위이기 때문에 1초는 1*1000이라고 할수 있다. 우선 diffDay를 살펴보자. 날짜를 나타내려면 밀리세컨드 초를 60초, 06분, 24시간으로 나눠주면 된다. 

// (05) 아까 가져온 h2 요소에 .innerText를 사용해 추가해준다.

// (06) setInterval()을 사용해 1초 간격으로 지속적으로 함수를 호출한다. 
// -> 앞에 함수를 호출한 이유는 브라우저가 js파일을 호출했을때, setInterval 실행 전의 딜레이를 없애기 위함이다.

function diffDay() {
    const masTime = new Date("2022-12-25");
    const todayTime = new Date();

    const diff = masTime - todayTime;

    const diffDay = Math.floor(diff / (1000*60*60*24));
    const diffHour = Math.floor((diff / (1000*60*60)) % 24);
    const diffMin = Math.floor((diff / (1000*60)) % 60);
    const diffSec = Math.floor(diff / (1000%60));

    remainTime.innerText = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
}

diffDay();
setInterval(diffDay, 1000);