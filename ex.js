console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
// 2

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
