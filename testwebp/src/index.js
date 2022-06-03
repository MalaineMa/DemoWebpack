
import '../src/style.scss'
import '../src/style.css'
import '../src/img-component.js'
import '../src/index.html'
import button from './button'

document.getElementById("button").appendChild(button());
console.log("hello world tes");

let menu = document.querySelector('nav ul')
let c = document.querySelector('nav .mobile')
c.addEventListener('click',function(){
    menu.classList.toggle('show')
})