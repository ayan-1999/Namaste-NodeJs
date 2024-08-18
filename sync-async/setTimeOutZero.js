console.log("This is a Asynchronous code");
var a = 987;
var b = 678;


//setTimeout with 0 second doesnot make it a synchronous fn.It still works as an Async fn
//As soon as GEC is popped out from call stack it gets executed
setTimeout(() => {
  console.log("this code will run after GEC is popped out");
}, 0);

setTimeout(() => {
  console.log("this code will run after 3 seconds");
}, 3000);

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}
var c = multiplyFn(a, b);
console.log(`the product of a and b is ${c}`);
