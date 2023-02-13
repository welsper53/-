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

const account = () => {
   return new Promise((resolve, reject) => { // 고차함수 - 함수로 반환
      setTimeout(() => {
         console.log("결제하기")
         resolve()
      }, 1000)
   })
};

const delivery = () => console.log("배송하기");


// goodSearch함수 호출될 때 콜백에서 cart함수를 호출하면
// 순서가 보장된다.
goodSearch()
   .then(cart)          // 파라미터로 cart를 넘기면 resolve가 cart함수 전체를 받아서 처리
   .then(account)       // account를 넘기면 resolve가 account함수 전체 받아서 처리
   .then(delivery)
   .then(() => console.log("배송 완료"))