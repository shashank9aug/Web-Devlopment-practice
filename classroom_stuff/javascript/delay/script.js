let btnWait=document.getElementById('btnWait')
let btnCounter=document.getElementById('btnCounter')
let status=document.getElementById('status')
let pressCount=document.getElementById('pressCount')

let count=0
btnCounter.onclick=function(){
    count++
    console.log('count',count)
    pressCount.textContent=count
}

btnWait.onclick=function(){
    status.textContent='Waiting'
    console.log('waiting')
    let start= Date.now()
    while(Date.now() <start + 5000) { /* do nothing */}
    status.textContent='Done'
    console.log('Done') 
}