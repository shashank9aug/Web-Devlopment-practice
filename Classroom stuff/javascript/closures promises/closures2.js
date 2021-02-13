function outest() {
    var c=20;
    function outer(b) {      
        let a=10;
        function inner(){
            console.log(a,b,c);
        }

        return inner;
    }
   return outer 
}

var close = outest()("helloworld");
close();