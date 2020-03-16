//* window.onload = ()=>{}


   
/*    div.style.height = '50px'
   div.style.backgroundColor = 'red'
   div.style.borderRadius = '10px 0 10px 0 '
 */
    //div.classList.add('mystyle')
    //div.classList.remove('mystyle')



let div = document.querySelector('#someDiv')

//====================1
let licht = true
let interval = setInterval(() => {

    if (licht) {
       div.classList.add('mystyle')
        licht = false
    }else{
        div.classList.remove('mystyle')
       licht = true 
    }

}, 1000);

//=====0r====1===easy way=====> >  WITH TOGGLE=============

/* setInterval(() => {
    div.classList.toggle('mystyle')
}, interval); */

//* --------parentElement------------acsses 


let father = div.parentElement
father.style.border = "2px solid black"