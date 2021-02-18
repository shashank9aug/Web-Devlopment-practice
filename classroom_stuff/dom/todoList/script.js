window.onload = function(){
    let inputAdd=document.getElementById('inputAdd')
    let outputAdd=document.getElementById('outputAdd')
    let todoList=document.getElementById('todoList')
    
    outputAdd.onclick=function(){
        let li=document.createElement('li')
        
        let deleteBtn= document.createElement('button')
        deleteBtn.innerText = '❎'
        deleteBtn.onclick =function (event){
            event.target.parentElement.remove()
        }
        
        let upbtn=document.createElement('button')
        upbtn.innerText='🔼'

        upbtn.onclick = function(event){
           //event.target =upbtn
           //event.target.parentElement = the <li> item
           //event.target.parentElement.parentElement is todolist

           event.target.parentElement.parentElement.insertBefore(
               event.target.parentElement,
               event.target.parentElement.nextElementSibling
           )
           
        }
        let dnBtn=document.createElement('button')
        dnBtn.innerText='⏬'
        dnBtn.onclick = function(event){
           //event.target =upbtn
           //event.target.parentElement = the <li> item
           //event.target.parentElement.parentElement is todolist

           event.target.parentElement.parentElement.insertBefore(
               event.target.parentElement.nextElementSibling,
               event.target.parentElement
           )

        }

        let taskSpan=document.createElement('span')
        taskSpan.innerText=inputAdd.value
        
        
        li.appendChild(deleteBtn)
        li.appendChild(upbtn)
        li.appendChild(dnBtn)
        li.appendChild(taskSpan)
        todoList.appendChild(li) 
       
    }

}

document.getElementById('outputAdd').style.backgroundColor='yellow'
document.getElementById('inputAdd').style.backgroundColor='yellow'

