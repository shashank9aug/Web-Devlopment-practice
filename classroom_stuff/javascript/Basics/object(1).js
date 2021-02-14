//one way
var apple={
    taste:"sweet",
    color:"red",
}

//class keyword (ECMAScript 2015)

//class Declaration
class fruitclass{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
};




//class Expression (not hoisted)
let fruitclass2= class{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
}
//function -Declaration, function Expression

let kiwi= new fruitclass("Sour","green");
let kiwi2=new fruitclass2("sout","green")