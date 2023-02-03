// array
const btns = document.querySelectorAll(".list li"); 
let isFlag = 1;

for(let i=0; i<btns.length; i++) {
    // 인자가 1개이면 괄호 생략 가능
    btns[i].addEventListener("click", (e) => {
        if(isFlag) {
            btns[i].setAttribute('class', 'on')
            --isFlag
        }
        else {
            btns[i].setAttribute('class', 'off')
            ++isFlag
        }
        console.log(e.target);
    });
}