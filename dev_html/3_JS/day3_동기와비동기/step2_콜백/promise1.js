// Promise.prototype 패턴

const goodSearch = () => {
   // resolve: 성공 시 콜백  |  reject: 실패 시 콜백
   return new Promise((resolve, reject) => { // 고차함수 - 함수로 반환
      setTimeout(() => {
         console.log("상품조회")
         resolve()
      }, 1000)
   })

};

const cart = () => {
   return new Promise((resolve, reject) => { // 고차함수 - 함수로 반환
      setTimeout(() => {
         console.log("카트담기")
         resolve()
      }, 1000)
   })
};

const account = () => console.log("결제하기");


// goodSearch함수 호출될 때 콜백에서 cart함수를 호출하면
// 순서가 보장된다.
goodSearch()
.then(() => {
   return cart();
})
.then(() => {     // cart()함수 이후 동작하겠다는 의미
   return account();
});