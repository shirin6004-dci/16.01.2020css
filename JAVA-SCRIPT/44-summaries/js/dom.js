//? task1     write code click an btn1  show alert msg

let btn1 = document.querySelector('#btn1')
btn1.addEventListener('click' , (e)=>{
    alert("hi")
})


//? task 2

let btn2 =document.querySelector('#btn2')
let divContain = document.querySelector('#container')
let divChild = document.createElement('div')
divContain.append(divChild)
btn2.addEventListener('click' , ()=>{
    divChild.classList.add('square')
})