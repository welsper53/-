// 이름이 있는 함수
function func1() {
    console.log('func1');
    func2(func1)
};

// 호출이 있어야한다 -> () 괄호 사용
// func1();


function func2(func1) {
    console.log(func1);
}