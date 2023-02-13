// 참 거짓
// 1) false
// 2) 0 -> 0이 아닌건 다 거짓 {}:Object, []:Array
// 3) null
// 4) undefined
// 5) NaN
// 6) 빈문자열


if (500) {
    console.log("0true");
}
if (0) {        // 문자 '0'은 참
    console.log("1true");
}
if ('') {
    console.log("2true");
}else{
    console.log("aatrue");
}