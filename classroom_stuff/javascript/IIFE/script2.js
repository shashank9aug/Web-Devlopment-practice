//IIFE used here
//for loop setTimeOut problem


//Debug this
/*
for(var i=0;i<10;i++){
    setTimeout(function(){
        console.log(i)
    }, 100)
}*/

//try  with IIFE
/*
for(var i=0;i<10;i++){
    (function(j){
        setTimeout(function(){
            console.log(j);
        },100)
    })(i)
}

*/
//more simpler problem
/*
for(let i=0;i<10;i++){
        setTimeout(function(){
            console.log(i);
        },100)
}
*/

//another method

for(var i=0;i<10;i++){
    setTimeout(console.log,100,i)
}

