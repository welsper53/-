import * as all from "./module1.js";

console.log(all);
console.log(all.number);
console.log(all.insa);
// 매개변수 함수를 받을 수 있다는 것은 함수가 객체라는 의미임
// 리턴타입을 함수로 사용가능하다는 것은 고차함수
// 변수가 함수를 참조할 수 있다는 것은 일급함수
// 이런 것들이 가능한 객체를 일급 객체
console.log(all.names);
console.log(all.hap);

const myCar = new all.Sonata();
console.log("내 자동차 바퀴수는 " + myCar.wheelNum);
myCar.speedUp();
console.log("현재 소나타의 속도는 " + myCar.speed);
