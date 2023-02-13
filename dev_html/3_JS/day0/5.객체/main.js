// 객체
const student = {
    name: '이순신',
    age: 55,
}

console.log(student);           // { name: '이순신', age: 55 }
console.log(student.name);      // 이순신
console.log(student['name']);   // 이순신

let key = 'name'
console.log(student[key]);      // 이순신


// 함수형
function Student() {
    this.name = '강감찬'
    this.age = 56
}

const student1 = new Student()

console.log(student1);             // Student { name: '강감찬', age: 56 }
console.log(student1.name);        // 강감찬
console.log(student1['name']);     // 강감찬


// Object
const student2 = new Object()
student2.name = '김유신'
student2.age = 55

console.log(student2);             // { name: '김유신', age: 55 }
console.log(student2.name);        // 김유신
console.log(student2['name']);     // 김유신

