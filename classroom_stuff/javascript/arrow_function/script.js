/*
With arrow functions the this keyword always represents the object that defined the arrow function.

Let us take a look at two examples to understand the difference.

Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

The first example uses a regular function, and the second example uses an arrow function.
*/

/* in global level this points to window level in js*/

/*window
Window file:///C:/Users/KIIT/Desktop/fullstack/Lecture06/this/index.html

window.__proto__
WindowPrototype { … }

window.__proto__
WindowPrototype { … }

window.__proto__.__proto__
WindowProperties { … }

window.__proto__.__proto__.__proto__
EventTargetPrototype { addEventListener: addEventListener(), removeEventListener: removeEventListener(), dispatchEvent: dispatchEvent(), … }

window.__proto__.__proto__.__proto__.__proto__
Object { … }

window.__proto__.__proto__.__proto__.__proto__.__proto__
null
this
Window file:///C:/Users/KIIT/Desktop/fullstack/Lecture06/this/index.html

this.__proto__
WindowPrototype { … }

this.__proto__.__proto__
WindowProperties { … }

this.__proto__.__proto__.__proto__
EventTargetPrototype { addEventListener: addEventListener(), removeEventListener: removeEventListener(), dispatchEvent: dispatchEvent(), … }

this.__proto__.__proto__.__proto__.__proto__
Object { … }

this.__proto__.__proto__.__proto__.__proto__.__proto__
null*/

function sayhello(){
   console.log('hello')
   return 'world'
}

let x=()=>{sayhello()}