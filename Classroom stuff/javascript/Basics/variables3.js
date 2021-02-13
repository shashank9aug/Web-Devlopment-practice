const myVar=10;

function alpha(){
    const myVar=11
    if(true){
        const myVar=21
        if(true){
            const myVar=33
            console.log(myVar)
        }
        console.log(myVar) 
    }
    console.log(myVar)
}

alpha()

//output:33 21 11 