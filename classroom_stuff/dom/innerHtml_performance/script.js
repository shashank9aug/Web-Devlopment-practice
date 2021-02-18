window.onload=function(){
 let inputNum = document.getElementById('inputNum')
 let btnprint = document.getElementById('btnprint')
 let ulList = document.getElementById('ulList')
  
 btnprint.onclick=function(){
   let start = new Date().getTime()  
    let n= parseInt(inputNum.value)
    for(let i=1;i<=n;i++){
         // btnprint.innerHTML+='<li>'+i+'</li> :it will print the list in button hahaha'
        ulList.innerHTML +='<li>' + i + '</li>'  
    }
   console.log(new Date().getTime()-start); 
  }
}