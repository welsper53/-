// 배열 내장 함수

const colors = ["red", "green", "blue"];
console.log(colors);

// toString() : 배열을 문자로 변환
let result = colors.toString();
console.log(typeof result);     // string

// join() : 구분자를 활용해 문자열로 이어붙이기
result  = colors.join("+");
console.log(result);           // red+green+blue

// pop() : 배열의 마지막 요소 제거(리턴값으로 잘라낸 요소 반환)
result = colors.pop();

// push() : 배열의 끝부분에 새로운 요소 추가 (리턴값으로 배열의 길이 반환)
result = colors.push("yellow");
console.log(result);           // 3

// shift() : 배열의 첫 부분 요소 제거 (리턴값으로 잘라낸 요소 반환)
result = colors.shift();
console.log(result);            // red

// unshift() : 배열의 첫 부분에 새로운 요소 추가 (리턴값으로 길이 반환)
result = colors.unshift("kiwi");
console.log(result);            // 3

// splice(삽입할위치, 잘라낼개수, 추가할내용) : 배열에 새로운 요소를 잘라서 붙임
colors.splice(1,0,"black");
console.log(colors);            // [ 'kiwi', 'black', 'green', 'yellow' ]

// concat() : 두 개 배열 합치기
const color2 = ["cyan", "brown"]
result = colors.concat(color2)
console.log(result);            // [ 'kiwi', 'black', 'green', 'yellow', 'cyan', 'brown' ]

// slice() : 배열 잘라내기 - 새로운 배열을 만들어서 잘라내기(리액트 CRUD처리시)
result = colors.slice(1);
console.log(result);            // [ 'black', 'green', 'yellow' ]

result = colors.slice(1, -1);
console.log(result);            // [ 'black', 'green' ]

const result2 = ['Object Null']
console.log(result2.slice(8, -1));      // []