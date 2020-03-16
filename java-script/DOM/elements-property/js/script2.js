//*--=====================change any atrribut==========


//let input = document.querySelector('#someInput')
//console.log(input.getAttribute('placeholder')) 
//input.setAttribute('placeholder' , 'change placeholder')



//input.setAttribute('newAtribiut' , 'new one')  //? make new attribute inside input
//console.log(input.getAttribute('newAtribiut'))  //? getAttribute > see attribute

//input.setAttribute('type' , 'checkbox') //? change type

//*-----------------------------------task--  1----
/* let input = document.querySelector('#someInput')
let arry = input.getAttribute('placeholder').split('') //! make it  ARRAY
let i = 0
let sum = " "
setInterval(() => {

   // console.log(arry)
    sum += arry[i]
    input.setAttribute('placeholder', sum)

    i++
    if (i == arry.length) {
        i = 0
        sum = " "
    }

}, 1000);
 */
//*------------------------or---1---------


let input = document.querySelector('#someInput')
let blaplaceholder = input.getAttribute('placeholder')
let counter = 0
setInterval(() => {
    counter ++
    let arr = blaplaceholder.substr(0,counter)
    input.setAttribute('placeholder' , arr)
    if (counter == blaplaceholder.length) {     //! reset
        counter = 0
        
    }
}, 1000);