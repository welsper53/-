console.log(1);
setTimeout(() => {
   console.log(2);
}, 2000); // mill sec 1000이 1초임
console.log(hap(1,3));  // import문이 뒤에 있어도 발생
import { hap } from "./module1.js"; /* import문도 호이스팅이 발생 */
console.log(3);
