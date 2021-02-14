function sayHello(){
    console.log("Hello!")
}
//Hello!

function sayHello(){
    console.log("Hello!")
}
console.log("And the wait starts....")
setTimeout(sayHello,1000);
setTimeout(sayHello,1000);

//Hello!
//Hello!

function sayHello(){
    console.log("Hello!")
}
console.log("And the wait starts....")
setInterval(sayHello, 1000)
//runs the function again and again untill we will cancle it


var intervalId
var runcount=0
function sayHello(){
    runcount++;
    if(runcount>5){
        console.log(intervalId)
    }
    console.log("Hello!")
}
console.log("And wait starts here....")
intervalId= setInterval(sayHello,1000)


setInterval(function() {
    console.log("this is  coiiiu")
}, 100);