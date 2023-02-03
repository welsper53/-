const studentA = {
    name: '나신입',
    age: 31,
}
const studentB = {
    name: '나초보',
    age: 29,
    parent: studentA
}

console.log(studentA);      // { name: '나신입', age: 31 }
console.log(studentB);      // { name: '나초보', age: 29, parent: { name: '나신입', age: 31 } }


const students = [studentA, studentB]

console.log(students[0]);                       // { name: '나신입', age: 31 }
console.log(students[0].name);                  // 나신입
console.log(students[0].age);                   // 29
console.log(students[1]['parent']['name']);     // 나신입