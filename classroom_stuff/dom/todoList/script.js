window.onload = function(){
    let inputAdd=document.getElementById('inputAdd')
    let outputAdd=document.getElementById('outputAdd')
    let todoList=document.getElementById('todoList')
    
    outputAdd.onclick=function(){
        let li=document.createElement('li')
        li.innerText = inputAdd.value
        
        let deleteBtn= document.createElement('button')
        deleteBtn.innerText = '❎'
        
        deleteBtn.onclick =function (event){
            event.target.parentElement.remove()
        }
        li.appendChild(deleteBtn)
        todoList.appendChild(li) 
       
    }

}

document.getElementById('outputAdd').style.backgroundColor='yellow'
document.getElementById('inputAdd').style.backgroundColor='yellow'

