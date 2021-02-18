/*

document.getElementsByTagName('li')[0]
<li>

document.getElementsByTagName('li')[1].innerText
"Zero"
document.getElementsByClassName('inputNum')
HTMLCollection { length: 0 }

document.getElementsByClassName('btn')
HTMLCollection { length: 0 }

document.getElementById('inputNum')
<input id="inputNum" type="number">

document.getElementById('ulList')
<ul id="ulList">

document.getElementById('ulList')[0]
undefined
document.getElementById('ulList').innerHTML
"
      <li>Hero</li>
      <li>Zero</li>
      <li>teethh</li>
      <li>myth</li>  
   "
document.getElementById('ulList').innerText
"Hero
Zero
teethh
myth"
let p2=document.getElementById('ulList')
undefined
p2.innerHTML
"
      <li>Hero</li>
      <li>Zero</li>
      <li>teethh</li>
      <li>myth</li>  
   "
p2.outerHTML
"<ul id=\"ulList\">
      <li>Hero</li>
      <li>Zero</li>
      <li>teethh</li>
      <li>myth</li>  
   </ul>"
p2.innerText
"Hero
Zero
teethh
myth"
p2.innerText="sdfasdfasdf"
"sdfasdfasdf"
*/

/*
let i= document.getElementById('inputNum')
undefined
i.value
""
i.value
"gfyutfi"
i.setAttribute('type','email')
undefined
i.setAttribute('type','email')
undefined
i.validity
ValidityState { valueMissing: false, typeMismatch: false, patternMismatch: false, tooLong: false, tooShort: false, rangeUnderflow: false, rangeOverflow: false, stepMismatch: false, badInput: false, customError: false }

i.validity
ValidityState { valueMissing: false, typeMismatch: true, patternMismatch: false, tooLong: false, tooShort: false, rangeUnderflow: false, rangeOverflow: false, stepMismatch: false, badInput: false, customError: false }

i.validity
ValidityState { valueMissing: false, typeMismatch: true, patternMismatch: false, tooLong: false, tooShort: false, rangeUnderflow: false, rangeOverflow: false, stepMismatch: false, badInput: false, customError: false }

let btn=document.getElementById('btnOutput')
undefined
btnOutput.innerHTML
"Output"
btnOutput.innerText="submit"
"submit"
btnOutput.innerText="click me"
"click me"
*/