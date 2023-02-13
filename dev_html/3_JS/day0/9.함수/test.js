// 같은 이름이면 브라우저가 자동으로 배열 전환
const lis = document.querySelectorAll('ul li');

// "var x" 사용 시 호이스팅 이슈 발생한다 => 3만 출력된다
// 이유: for문 안에서만 유지 돼야하는데 밖에서도 유지된다
for(var x=0; x<lis.length; x++) {
    lis[x].addEventListener('click', function() {
        console.log(`호이스팅: ${x}`);     // 3
    })
};

// 자기 호출 함수 (호이스팅 해결)
for (var x=0; x<lis.length; x++) {
    ((index) => {
        lis[x].addEventListener("click", () => {
            console.log(`자기호출함수 : ${index}`);     // 0 1 2
        })
    })
    (x)
}

// ECMAScripot
for(let x=0; x<lis.length; x++) {
    lis[x].addEventListener('click', function() {
        console.log(`ECMAScripot: ${x}`);     // 0 1 2
    })
};