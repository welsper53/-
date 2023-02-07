// 데이터 타입
const a = 5

console.log(typeof a);                      // number
console.log(typeof '이순신'=='string');     // true
console.log(typeof null=='object');         // true
console.log(typeof []=='object');           // true  대괄호 - 배열
console.log(typeof {}=='object');           // true  중괄호 - 객체
console.log(typeof function(){}=='function');           // true



function methodA() {
    console.log("methodA");
}

methodA();
console.log(methodA);


console.log(Object.prototype.toString.call(null).slice(8, -1) === "Null");

function checkType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}

const checkType2 = (data) => {      // ES6, ECMAScript(2016) - arrow fucntion
    return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(checkType(null));
console.log(checkType(undefined));
console.log(checkType('강감찬'));
console.log(checkType2(null));
console.log(checkType2(undefined));
console.log(checkType2('강감찬'));