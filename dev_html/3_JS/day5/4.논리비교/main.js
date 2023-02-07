// 부정
console.log(true);          // true
console.log(!true);         // false

console.log(!0);            // true
console.log(!!0);           // false
console.log(!null);         // true
console.log(!NaN);          // true
console.log(!undefined);    // true
console.log(!{});           // false
console.log(![]);           // false
console.log(!"");           // true


// 비교
const a = 1
const b = 2

console.log(a == b);        // true
console.log(a != b);        // true


// 일치
const x = 1
const y = 1
const z = '1'

console.log(x == y);        // true
console.log(x == z);        // true
console.log(typeof x);      // number
console.log(typeof z);      // string
console.log(x === z);       // false
