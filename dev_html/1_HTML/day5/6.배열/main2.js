// 배열 출력

const colors = ["red", "green", "blue"]

// arrow function[ES6]는 파라미터가 한 개이면 괄호 생략 가능하다
// 함수의 이름이 없다 - 사용자 호출이 불가능함
console.log(`////arrow function////`);
colors.forEach((color, index, colors) => {
    console.log(color);
})

console.log(`////af 파라미터X////`);
colors.forEach(color => {
    console.log(color);
})
// arrow function에서는 실행문이 단일행이면 {}를 생략 가능
console.log(`////af 단일행////`);
colors.forEach(color => console.log(color))

// 함수의 이름이 없다
console.log(`////function////`);
colors.forEach(function(color, index, colors) {
    console.log(color);
})