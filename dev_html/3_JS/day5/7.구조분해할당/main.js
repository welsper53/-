const obj = {
    a: 1,
    b: 2,
    c: 3
}
const {a,b, e} = obj
const {c} = obj

console.log(a);     // 1
console.log(b);     // 2
console.log(e);     // undefined
console.log(c);     // 3

const {y=5} = obj
// obj에 y가 없으니 초기화 된 값이 출력된다
console.log(y);     // 5


const arr = [1,2,3,4,5]
const [i, j, ... rest] = arr
console.log(i);         // 1
console.log(j);         // 2
console.log(rest);      // [ 3, 4, 5 ]