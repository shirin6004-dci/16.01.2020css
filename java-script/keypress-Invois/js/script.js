//* == weiter  EVENTS  ========keypress events===which>askicode=============

let input = document.querySelector('#someinput')
//keypress , keydown , keyup , 
input.addEventListener('keypress' , function (e) {
    console.log(e)
      let checkValidate = false

   if ((e.which >= 65 && e.which <= 90 ) || (e.which == 196)) {  // just klein charachter && Ä
    checkValidate = true
        
    }

    if (!checkValidate){
         e.preventDefault()   //!  will stop input
    }

})