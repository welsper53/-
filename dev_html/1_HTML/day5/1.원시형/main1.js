////////////////// 템플릿 리터럴 -> `
const str1 = `hello`;
const str2 = `${str1} world!`;

console.log(str2);

////////////////// 소숫점 표현
const a = 0.1;
const b = 0.2;

console.log(a + b);

console.log(typeof (a + b).toFixed(1));
console.log(typeof Number((a + b).toFixed(1)));

////////////////// undefined: 기본적으로 갖는 값 <- 값이 할당되지 않은 상태
let age = undefined;

console.log(age);

setTimeout(function () {
  // 콜백 함수
  age = 10;
  console.log(age);
}, 2000); // 밀리세크 단위


////////////////// null 어떠한 값이 존재하지 않는다
let age2 = null;

console.log(age2);

setTimeout(function () {
    // 콜백 함수
    age2 = 10;
    console.log(age2);
  }, 2000); // 밀리세크 단위