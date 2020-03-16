window.onload = () => {

    let objdiv = document.querySelector('#someDIV')
    objdiv.style.backgroundColor = 'gray'
    objdiv.style.height = '50px'

    let storage = " "
    setInterval(() => { //?1
        storage++
        objdiv.style.height = storage + 'px'
    }, 1000);


}

//? -------othey way to increase------1----
/* 

function hei() {
  let objdiv = document.querySelector('#someDIV')
let i = ' '
    setInterval(() => {
        i++
        objdiv.style.height =i+'px'


    }, 500);


}
 */


//!-------------------------------------------
let objdiv = document.querySelector('#someDIV')

let i = 1
let time = true
setInterval(() => {
    if (time) {         //! if true do 
        i++
    } else {            //! else do
        i--
    }
    
    if (i == 100) {   //! whenn is false
        time = false

    } if (i == 1) {         //!  when is true
        time = true
    }


 
    objdiv.style.height =i+'px'
}, 1000);






