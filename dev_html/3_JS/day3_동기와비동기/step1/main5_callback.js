const hap = (x, y, callback) => {
   setTimeout(() => {
      callback(x+y);
   }, 3000);
}

const x = hap(2,3, (result) => {
   console.log(result);
});

const y = x;
console.log("y: " + y);