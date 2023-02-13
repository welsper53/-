// async와 await

const goodSearch = () => {
   // resolve: 성공 시 콜백  |  reject: 실패 시 콜백
   return new Promise((resolve, reject) => { // 고차함수 - 함수로 반환
      // 고차함수 - 반환으로 함수
      setTimeout(() => {
         console.log("상품조회")
         resolve()
      }, 1000)
   })
};

const cart = () => console.log("카트담기");

// goodSearch함수 호출될 때 콜백에서 cart함수를 호출하면
// 순서가 보장된다
const runTest = async() => {
   await goodSearch();
   cart()
}

runTest();