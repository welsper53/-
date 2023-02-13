const hap = (x, y) => {
   setTimeout(() => {
      return x+y
   }, 3000)
}

const x = hap(2,3);
console.log("x: " + x);
const y = x;
console.log("y: " + y);
