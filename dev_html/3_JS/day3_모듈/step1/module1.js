export default 1;   // default 사용하면 '{}' 사용불가

export const insa = "hello";
export const names = ["apple", "kiwi", "tomato"];
export const hap = (i, j) => {
  return i + j;
};

export class Sonata {
  constructor() {
    this.wheelNum = 4;
    this.speed = 10;
  }
  speedUp = () => {
    this.speed += 1;
  };
}

/* 
    호이스팅 이슈 위치
    1) var
    2) head태그 안에 선언 한 함수
    3) import문 - 모듈사용(ES6, 브라우저지원)

    함수 선언
    1) 선언적 함수
    2) 익명 함수 <- 콜백함수(나중에 실행-동기적), JS는 동기적(순차적)
        : 전제조건- JS에서는 함수도 객체이다
    3) 대입 함수 - 일급함수 -> 고차함수(return 함수)(리덕스(리액트에서 상태관리 구현한 것) 만드는데 결정적 역할)
        : const func = () => {}
    4) 즉시실행 함수 - (함수선언)(호출) - ES6이전에는 호이스팅 이슈 해결하는 방법으로 사용되었다.
*/
