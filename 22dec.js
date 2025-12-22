//Array methods 

//1 Array length:
let a=["HTML","CSS","C","JAVA","JS"];
console.log(a.length);

//2 Array toString:
let b=["HTML","CSS","C","JAVA","JS"];
let c=b.toString();
console.log(c);

//3 Array join:
let d=["HTML","CSS","JS","React"];
console.log(d.join('|'));

//4 Array delete"
let stud={
    Name:"Hanshi",
    rollno:468,
    age:21,
    location:"Madurai"
}
console.log(delete stud.age)
console.log(stud)

//5 Array concat:
let d1=[11, 12, 13];
let d2=[14, 15, 16];
let d3=[17, 18, 19];
let d4=d1.concat(d2, d3);
console.log(d4);

//6 Array flat()
const a1 = [['1','2'],['3','4','5',['6'],'7']];
const a2 = a1.flat(Infinity);
console.log(a2);

//7 Array push():
let e=[10,20,30,40]
e.push(50);
e.push(60,70,80);
console.log(e)

//8 Array unshift
let f =[20,30,40];
f.unshift(10)
console.log(f);

//9 Array pop()
let g=[10,20,30,40]
g.pop()
console.log(g)

//10 Array shift()
let h=[10,20,30,40]
h.shift()
console.log(h)

//11 Array splice()
let i = [20,30,40,50];
a.splice(1,3);
a.splice(1,0,3,4,5);
console.log(i);

//12 Array slice
const j = [1,2,3,4,5];
const res = a.slice(1,4);
console.log(res); 
console.log(j)

//13 Array some()
const k=[1,2,3,4,5]
let result=j.some((val)=>val>4)
console.log(result)

//14 Array map()
let l=[4,9,16,25]
let sub=l.map(geeks)
function geeks(){
    return l.map(Math.sqrt)
}console.log(sub)

//15 Array filter
let m=[1,2,3,4,5]
let m2=m.filter((num)=>num>1)
console.log(m2)

//16 Array reduce()
let n=[88, 50, 25, 10];
let sub1=n.reduce(geek);
function geek(tot,num1) {
    return tot-num1;
}console.log(sub1);

//17 Array reverse()
let o=[1,2,3,4,5]
o.reverse()
console.log(o)

//18 Array values()
const p = ["Apple", "Banana", "Cherry"];
const res1=p.values();
for (const value of res1) {
    console.log(value);
}

//19 Array find
let users = [10, 20, 30];
console.log(users.find(u => u > 15));

//20 Array index()
console.log(users.findIndex(u => u > 15));

//21 Array index
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.includes("Apple"));

//22 Array inexOf()
console.log(fruits.indexOf("Mango"));

//Create Array using Literal
// Creating an Empty Array
let s = [];
console.log(s);

// Creating an Array and Initializing with Values
let t = [10, 20, 30];
console.log(t);

// Create using new Keyword (Constructor)
let u=new Array(10,20,30)
console.log(u)

// Accessing Elements of an Array
let v=["HTML","CSS","C"]
console.log(a[0])

//Accessing the First Element of an Array
let w=["HTML","CSS","C"]
let w1=w[1]
console.log(w1)

// Accessing the Last Element of an Array
let x=["HTML","CSS","C","JAVA"]
let x1=x[x.length-1]
console.log(x1)

//Modifying the Array Elements
let y=["HTML","CSS","C","JAVA"]
console.log(y)
y[2]="JS";
console.log(y);

//Adding Elements to the Array
let z=["HTML","CSS","C","JAVA"]
z.push("JS");
z.unshift("PYTHON")
console.log(z);

//Removing Elements from an Array
let A=["HTML","CSS","C","JAVA"]
let lst=A.pop()
console.log(A);
let frst=A.shift()
console.log(A);
A.splice(1,3)
console.log(A);

//Array length
let B=["HTML","CSS","C","JAVA","PYTHON","JS"]
let B1=B.length;
console.log(B1);

//Increase and Decrease the Array Length
let C=["HTML","CSS","C","JAVA","PYTHON","JS"]
C.length=2;
console.log(C)
C.length=9
console.log(C);

// Iterating Through Array Elements
let D=["HTML","CSS","C","JAVA","PYTHON","JS"]
for(let i=0;i<D.length;i++){
    console.log(D[i])
}

//Array Concatenation
let E=["HTML","CSS","C","JAVA","PYTHON","JS"]
let E1=["WEB","NLP","NODE","EXPRESS"]
let E2=E.concat(E1)
console.log(E2)

//Conversion of an Array to String
let F=["HTML","CSS","C","JAVA","PYTHON","JS"]
console.log(F.toString())

//Check the Type of an Arrays
let G=["HTML","CSS","C","JAVA","PYTHON","JS"]
console.log(typeof G);