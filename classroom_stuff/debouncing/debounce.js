//Debouncing concept in JS
//used in scroll bar event or in searching over making api call's
//it will basically decreases the no of api calles 
let counter =0;

const getData=()=>{
    //calls an api and gets Data
    console.log("Fetching Data....",counter++)
}

const debounce = function(fn, d){
    let timer;
    return function(){
        let context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() =>{
            getData.apply(context, args);
        } , d); 
    }
}

const betterFunction = debounce(getData, 400);