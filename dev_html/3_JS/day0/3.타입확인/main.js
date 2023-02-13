// Nullish

console.log(null ?? 1);             // 1
console.log(true ?? 1);             // true
console.log(false ?? 1);            // false
console.log(0 ?? 1);                // 0
console.log(undefined ?? 2);        // 2
console.log(undefined ?? null);     // null
console.log(null ?? 1 ?? 3);        // 1


// OR연산자 인 경우 (null 또는 undefined)
const no = 0
const num = no || 7
console.log(num);                   // 7

// Nullish 병합 연산자를 이용하면
// - 왼쪽부터 비교하는 것은 OR연산자와 동일
// 그러나 null, undifined는 건너 뛰고 
// 나머지 데이터를 만나면 처음 만나자 마자 반환
const num2 = no ?? 7
console.log(num2);                  // 0