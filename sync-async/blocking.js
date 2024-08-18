const fs = require("fs");
const https = require("https");

console.log("This is a Asynchronous code");
var a = 987;
var b = 678;

const fileData = fs.readFileSync("./data.txt", "utf8");
console.log("synchronous", fileData);

https.get("https://dummyjson.com/products/1", (res) => {
  console.log(`data fetched successfully ${res.statusCode}`);
});

setTimeout(() => {
  console.log("this is set timeout");
}, 5 * 1000);

fs.readFile("./data.txt", "utf8", (err, data) => {
  console.log(`file data,asynchronous:${data}`);
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}
var c = multiplyFn(a, b);
console.log(`the product of a and b is ${c}`);
