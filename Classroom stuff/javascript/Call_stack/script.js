
//call stack is created when fuction called internally

function ceo(){
    console.log("Let's make dent in the Universe");
    cto() 
}

function cto(){
    console.log("Let's make changging product")
    vpengg() 
}

function vpengg(){
    console.log("Let's make JS framework")
    techlead();
}

function techlead(){
    console.log("Let's port Angular to JS")
    devloper()
}

function devloper(){
    console.log("Lets end the all")
}

ceo()

