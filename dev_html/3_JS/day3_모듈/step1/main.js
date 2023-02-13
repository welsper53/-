import number from "./module1.js";
import { insa, names, hap, Sonata } from "./module1.js";

console.log(number);
console.log(insa);
console.log(names);
console.log(hap);

const myCar = new Sonata();
console.log("내 자동차 바퀴수는 " + myCar.wheelNum);
myCar.speedUp();
console.log("현재 소나타의 속도는 " + myCar.speed);
