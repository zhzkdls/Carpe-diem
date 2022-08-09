const subtitle = document.querySelector(".game_subtitle");
const num = document.querySelector(".num_go");

// 선택한 숫자 + 랜덤 숫자
const textSelect = document.querySelector(".selection span");
const textResult = document.querySelector(".result span");

// 결과를 나타내는 글자(3)
const game_form = document.querySelector(".game_form");
const formInput = game_form.querySelector(".game_input");

// 0 ~ 50까지 숫자 설정
function handleRange() {
    const maxRange = num.value;
    formInput.value = "";
    formInput.setAttribute("max", maxRange);
}

// 랜덤 숫자 생성
function createRandomNumber() {
    const randomRange = parseInt(num.value) + 1;
    const number = Math.floor(Math.random() * randomRange);
    return number;
}

function textSelectHeading(input, answer) {
    textSelect.innerText = `You chose ${input}, the machine chose ${answer}.`;
}

function textResultHeading(input, answer) {
    if (parseInt(input) === parseInt(answer)) {
        textResult.innerText = "You Win!";
    } else 
        textResult.innerText = "You Lost!";
    }

function handleSubmit(event) {
    event.preventDefault();
    const input = formInput.value;
    const answer = createRandomNumber();
    textSelectHeading(input, answer);
    textResultHeading(input, answer);
}

function init() {
    num.addEventListener("input", handleRange);
    game_form.addEventListener("submit", handleSubmit);
}
init();
