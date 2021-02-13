let a=10
let b=[1,2,3,4,5]

c=10; //global variable
var d=30;  //function scope
let e=50;  //Block scope


function fun(){
    let c=5

    if(c==5){
        //var f=10
        //let f=10  //let has a block scope, var has a function scope
        f=10;
        console.log('Inside',f)
    }
    console.log('outside',f)
}


fun()
console.log('global',f)

//we need not require to define return of function outside.
function square_root(n){
   console.log(Math.sqrt(n)); 
   return "Hello";
}


//function Hoisting
var sqr_root=function(){
    
}


//variables

var a=10
a++
console.log(a)

let b=20
b++
console.log(b)


const c=11
c++
console.log(c)
