console.log(a);
console.log(b);
console.log(c);


var a = 10;// undefined
let b = 20;
const c = 30;

let obj={
  name: "Raja",
    priname: function()
    {
    console.log(this.name)
}
}
obj.priname()
let i=1;
do{
    console.log(i)
    i++;
}while(i<=10)
// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS","C","PYTHON","JAVA","NODDE"]
a.length = 7;
console.log("After Increasing Length: ", a);
a.length = 2;
console.log("After Decreasing Length: ", a)


 async function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (!Validate(cart)) {
      const err = new Error("cart is invalid");
      reject(err);
    }
    const orderId = 12345;
    if (orderId) {
      resolve("success");
    }
  });
}

createOrder(cart)
  .then((orderId) => {
    return proceedtopayment(orderId);
  })
  .then((showordersummary) => {
    return ordersummarys(showordersummary);
  })
  .then((wallent) => {
    return updatewallet(wallent);
  })
  .catch((err) => {
    console.log(err);
  })
  .then((orderId) => {
    console.log(orderId);
  });




async function createOrder(cart) {
 try {
    const orderId=await createOrder(cart);
    const payment=await proceedtopayment(orderId);
    const summary=await ordersummary(payment);
}catch(err){
   console.log(err);
  }
}
