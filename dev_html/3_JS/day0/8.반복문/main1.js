let colors = ['red', 'green', 'blue']

// 콜백함수 - 함수 호출할 때 인수(파라미터)로 함수가 들어가는 형태
// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// ES5 - 반복처리기능만, 유사배열도 처리가능
// ES6 - 순수배열만 가능

// 이전 방법
colors.forEach(function(color, index, items) { // 3번 반복
    // console.log(color);
    // console.log(index);
    // console.log(items);
})
/*  출력값 <- colors.length
red
0
['red', 'green', 'blue']
green
1
['red', 'green', 'blue']
blue
2
['red', 'green', 'blue']
*/

// arrow function <- React(데이터변하면 변하는 것만 렌더링 처리)
colors.forEach((color, index, items) => {
    // 동일
})

colors.map(function(color, index, items) {
    // 동일
})