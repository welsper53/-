console.log(text);
text = "hello";
var text;

console.log(text);


const btns = document.querySelectorAll("ul li");

for (var j=0; j<btns.length; j++) {
    // 즉시실행 함수
    /* 
        괄호가 2개 들어감
        1. 함수의 선언부
        2. 함수 호출하는 괄호
    
        익명함수 형태인데 호출이 되는 이유는
        두번째 괄호가 있기 때문에 가능하다
        (함수가 자기자신을 호출하자마자 즉시 실행하기 때문)
    */
    ((index) => {

        btns[j].addEventListener("click", () => {
            console.log(index);
        }// end of click event
    )})(j)
}