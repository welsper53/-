const fruits = ["🍇", "🍒", "🍊"];
const fruits2 = ["🥦", "🥔", "🍆"];

// 전개 구문
console.log("//arrow function//");
const fruits3 = ["🍏", ...fruits2];
fruits3.forEach((fruit, index) => {
    console.log(`${index} - ${fruit}`);
})

console.log("//이전버전//");
const fruit4 = [...fruits, ...fruits2]
fruit4.forEach(function(fruit, index) {
    console.log(`${index} - ${fruit}`);
})



const dept = {
    deptno: 30
    , dname: '개발부'
    , loc: '제주'
}
const emp = {
    empno: 7566
    , ename: 'SCOTT'
    , sal: 2500
}
const deptnemp = {...dept, ...emp}
console.log(deptnemp);

const emp2 = {...emp, empno: 7499, ename: "TIGER", sal: 3000}
console.log(emp2);



console.log("//////////////////");
let items = [
    { id: 1, name: "벤치프레스", count: 10 },
    { id: 2, name: "랫풀다운", count: 20 },
    { id: 3, name: "스쿼트", count: 30 },
]

let item2 = [...items, {id: 4, name: "ㅇㅇㅇ", count: 40}]
item2.forEach((item) => {
    console.log(item);
})
console.log("//////////////////");
console.log(item2);