
//one of way creating objects without defining the class

//one of way creating javascript (json) javascript object notation
var bird={
    x:100,
    y:20,
    color:"blue",
    eggs:["one","two","three"],

    //fly is var of this object as it will return the current time object of bird
    fly:function(){
        console.log("Bird is flying",this.x,this.y)
    }
}

//for loop
for(let i=0;i<bird.eggs.length;i++){
    console.log(bird.eggs[i]);
}

//for Each loop
bird.eggs.forEach(function(val,idx) {
    console.log(idx,val)
})