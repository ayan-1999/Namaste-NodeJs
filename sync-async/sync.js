console.log("This is a synchronous code");
var a = 987;
var b = 678;
function multiplyFn(x, y) {
  const result = x * y;
  return result;
}
var c = multiplyFn(a, b);
console.log(`the product of a and b is ${c}`);
