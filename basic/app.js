// ------------- Variable -------------
// const a = 5;   // 값을 변경할 수 없는 상수
// const b = 2;
// let myName = "ohjiwoo";  // 값을 변경할 수 있는 변수
// // 기본으로 const를 쓰고 변경할 필요가 있을 때에만 let을 사용함

// console.log(a + b);    // 콘솔에 출력
// console.log(a * b);
// console.log(a / b);
// console.log("hi, my name is " + myName);

// myName = "nicolas";   // 변수 이름 변경 
// console.log("your name is " + myName);

// ------------- Boolean -------------
// const amIFat = true;
// const amIBig = false;
// const amISmall = null;  // defined 되었지만 아무 의미도 없음
// let something;   // undefined
// console.log(amIFat);
// console.log(amIBig);
// console.log(amISmall);
// console.log(something);

// ------------- Array(배열) -------------
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";

// const daysOfWeek = [mon, tue, wed, thu, fri, sat];
// const nonsense = [1, 2, "hello", false, null, true, undefined];  // 다양한 데이터 타입이 들어갈 수 있다.

// console.log(daysOfWeek);

// console.log(daysOfWeek[4]);   // Get Item from Array
// daysOfWeek.push("sun");   // Add one more day to the Array
// console.log(daysOfWeek);

// ------------- Objects(구조체) -------------
// const player = {
//     name: "giwoo",
//     points: 1212,
//     hansome: false,
//     fat: true,
// };
// console.log(player);
// console.log(player.name);
// player.name = "jiwoo";  // object가 const 더라도 object의 속성은 변경 가능
// console.log(player.name);
// player.lastName = "potato";  // 새로운 속성 추가
// console.log(player);

// ------------- function -------------
function sayHello(name, age){
    console.log("Hello my name is " + name + " and I'm " + age + " years old!");
}
sayHello("ohjiwoo", 22);
sayHello("nico", 23);
sayHello("nomade", 21);
sayHello("coder", 20);

function plus(firstNumber, secondNumber){  // 매개변수 순서 중요
    console.log(firstNumber, secondNumber);  // 두 수를 단순히 출력
    console.log(firstNumber + secondNumber);  // 두 수를 더해서 출력
}
function divide(a, b){  // 매개변수는 함수 내에서만 사용 가능
    console.log(a / b);
}
plus(8, 60);
divide(98, 20);

// player object
const player = {
    name: "jiwoo",
    sayHello: function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you!");
    },
};
console.log(player.name);
player.sayHello("lynn");