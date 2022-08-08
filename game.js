const input1 = document.getElementById("input1");
const iteratlons = document.getElementById("iter");





// 버젼 1

// function guessNumber() {
//     let randomNum = Math.floor(Math.random() * 40);
    
//     // output to the cosole for debugging
//     console.log(randomNum);
//     // declare a variable
//     let guess;
//     guess = prompt("제발 0~40 사이에 숫자를 적어주세요")
//     // console.log("나의 숫자는 : " + guess);
//     if (guess < randomNum) {
//         window.alert("너무 낮아");
//     } else if (guess > randomNum) {
//         window.alert("너무 높아");
//     } else if (guess == randomNum) {
//         window.alert("너가 이겼어~!!");
//     } else {
//         window.alert("에러!!!!!!!!");
//     }
// }