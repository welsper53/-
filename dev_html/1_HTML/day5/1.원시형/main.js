// const(상수) - 재할당이 불가능하다
const num = 5; // 선언과 초기화
const pi = 3.14;

console.log(num);

// 변수 선언 시 var는 사용하지 않는다 <- 호이스팅 때문
let no = 3;
no = 6;

console.log(no);

// typeof: 타입을 판별하는 연산자
console.log(typeof pi);
// NaN(Not a Number): 숫자로 표기할 수 없음
console.log(num + undefined); // NaN
