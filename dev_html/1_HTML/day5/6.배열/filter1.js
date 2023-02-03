// 필터

// arr.filter(callback(element[, index[, array]])[, thisArg])



function Counter() {
    this.sum = 0
    this.count =0
}

// prototype을 이용하면 나도 자바스크립트처럼
// 사용자 정의 객체를 선언 한 뒤 사용자 정의 함수(API)를 정의할 수 있다
// 객체.prototype.메소드명 = ~~
// 우리가 정의한 객체(Counter)는 표준이 아니다
// 또한 배포가 되지 않았다 -> 구글에서 사용 불가
Counter.prototype.add = function(array) {    // array -> [2,5,9]
    // arr.forEach(callback(currentvalue, index, array), thisArg)
    array.forEach(function(item) {
        this.sum += item    // 0-2-7-16
        ++this.count;       // 3
    }, this);
}

const obj = new Counter();
obj.add([3,5,15]);

console.log(obj.sum);
console.log(obj.count);

// 공부할 언어
// react.js -> redux사상-사용자 정의 구현해 보기(수준), vue.js
// + typescript: 바닐라스크립트(js) 기반 위에 얻혀진 언어 - 객체지향 (캡슐화, 상속, 다형성)
// 자바스크립트에서도 사용자 정의 객체를 만들 수 있다 <- function

// 사용자 정의 함수를 정의할 때는 prototype을 사용
// prototype을 사용하여 함수를 정의한다는 건 사용자 정의 API(객체,함수 + 변수)를 만드는 것이다.

// 자바스크립트에서 함수를 만들 때 function
// 객체를 선언할 때도 function
// 객체가 정의하는 함수를 만들 때는 prototype
function Sonata() {
    this.wheelNum
    this.speed
    this.carName
}

Sonata.prototype.stop = function(wheelNum) {
    console.log("stop 호출" + wheelNum);
}

const myCar = new Sonata()
myCar.stop(4)