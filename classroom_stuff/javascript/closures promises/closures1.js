function outer(arg1){
    let var1=10
    //let x=20
    function middle(arg2){
        let var2=20

        //let x=10  
        
      function inner(arg3){
        let var3=30
        console.log(arg1,var1,arg2,var2)
      }
      return inner
    }      
  return middle
}


var t= outer()('param1');
outer();