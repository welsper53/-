// 구조 분해 할당
const fruits = ['🍇','🍉','🍊'];
const [f1, f2, f3] = fruits;
console.log(f1, f2, f3);


// 미사용 시
const fr1 = fruits[0]
const fr2 = fruits[1]
const fr3 = fruits[2]
console.log(fr1, fr2, fr3);

console.log("/////////////////////////");


const dept = {
    deptno: 30
    , dname: '개발부'
    , loc: '제주'
}

// 객체: {}
const {deptno, dname, loc} = dept;
console.log(deptno, dname, loc);
