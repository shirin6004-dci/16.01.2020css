
let counterElement1 = document.querySelector('#counterElement')
let storage = localStorage.getItem('browsertime')

if(storage){ 
 
 counterElement1.innerText =  storage 
 localStorage.setItem('browsertime' , eval(storage)+1)
}else{
    localStorage.setItem('browsertime' , 1)
    counterElement1.innerText = 0
}
