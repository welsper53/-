// 클래스값일 경우 파라미터명 앞에 "."을 붙여야 한다
// <-> 태그일 경우 붙이지 않는다
const a = document.querySelector("a")
console.dir(a);     // DOM구조를 볼 수 있다

a.onclick = () => {
    console.log("링크 클릭");
}
a.onclick = () => {
    console.log("링크 클릭 다시");
}

a.addEventListener('click', () => {
    console.log("클릭");
})
a.addEventListener('click', () => {
    console.log("클릭 다시");
})