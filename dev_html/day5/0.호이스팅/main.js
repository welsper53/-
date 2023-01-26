// 호이스팅 때문에 선언이 끌어올려져서 오류 안남.
let text;           // 선언만 한 상태
console.log(text); // (선언 + 초기화 된 상태)
text = 'Hanamon!'; // (선언 + 초기화 + 할당 된 상태)
// var text;
console.log(text);
console.log(`text의 값은 ${text} 입니다`);

const 변수명 = "test"
console.log(변수명);