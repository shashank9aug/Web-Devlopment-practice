
//here function is pointing to the windows
function checkthis() {
    console.log(this)
}

let obj={
    a:10,
    b:'sdasafd',
    c:true,
    //object with function
    d:function(){
        console.log(this)
    },
    //object inside object
    e:{
         l:345,
         m:true,
         m:{
             a:100,
             b:'dafsd'
         }
    }
}
