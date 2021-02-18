let inputNum = document.getElementById('inputNum')
let btnPrint = document.getElementById('btnPrint')
let ulNumlist = document.getElementById('ulNumlist')



btnPrint.onclick = function(){
    
       let start=Date.now()

      let n=inputNum.textContent
    

     console.log('time taken' ,Date.now()-start)  

}