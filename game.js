const subtitle = document.querySelector(".game_subtitle");
const num = document.querySelector(".num_go");

const textSelect = document.querySelector(".selection span");
const textResult = document.querySelector(".result span");

const game_form = document.querySelector(".game_form");
const formInput = game_form.querySelector(".game_input");

function handleRange() {
    const maxRange = num.value;
    formInput.value = "";
    formInput.setAttribute("max", maxRange);
}

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
