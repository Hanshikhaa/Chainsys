function respect(name){
    console.log("Hello "+name)
}function processUser(callback){
    callback("Hanshikhaa");
}processUser(respect)


function add(a,b,callback){
    const result=a+b;
    callback (result);
}function displayResult(value){
    console.log(value)
}add(200,14,displayResult)

function sayHello() {
  console.log("Hello JavaScript");
}
sayHello();

function greet(name) {
  console.log("Hello " + name);
}

greet("Hanshi");
greet("Alex");

const multiply = (a, b) => a * b;
console.log(multiply(4, 3));

function outer() {
  console.log("Outer function");

  function inner() {
    console.log("Inner function");
  }

  inner();
}

outer();
