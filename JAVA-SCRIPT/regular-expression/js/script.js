//*=================js regular expression

//*/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ // check it is a imail or not
/* 
let someText = 'we are web developers FBW5'
let regex = new RegExp('web') //!1.1
let testresult = regex.test(someText) //!1.2
console.log(testresult) */
//*=========--------------------------------------
 // 1 -/^\d/ (first charachter numbers)    2-/^\d\d/ (first and secend number(digit))  and so weiter...
// any charachter between [a-n]

/* let someText = '443nsdsd'
let regex = new RegExp(/^\d\d\d[a-z]/)    
let testresult = regex.test(someText) //!
console.log(testresult)
 */
//*---------------task1-------
//write a regex first char is number- secend is small letter- third is capitall -forth is number

/* let someText = '4eE3'
let regex = new RegExp(/^\d[a-z][A-Z]\d/)    
let testresult = regex.test(someText) //!
console.log(testresult)
 */
//*--------------------task2------------------
// write a regex first char is number- secend is white space (\s) or (' ')ohne ''- third is capitall -forth is number

/* let someText = '4 E3'
let regex = new RegExp(/^\d\s[A-Z]\d/)    
let testresult = regex.test(someText) //!
console.log(testresult) */

//*------------------task4-----------
// check if text is an email
//! $    at the end of text or email can not be new line (no match new line )
//! \b    NO   withspace at the (end and first)
/* let someText = 'shirin@gmail.com'
let regex = new RegExp(/^\w+@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)    
let testresult = regex.test(someText) //!
console.log(testresult)
 */
//*-------------------task5------------------
//regex to match phoneNumber   +49 152 126580
//[0-9]*\/*(\+49)*[ ]*(\([0-9]+\))*([ ]*(-|–)*[ ]*[0-9]+)*
/* 
let someText = '+49 152 126580'
let regex = new RegExp(/^[0-9]*\/*(\+49)*[ ]*(\([0-9]+\))*([ ]*(-|–)*[ ]*[0-9]+)/)    
let testresult = regex.test(someText) //!
console.log(testresult) */




//*--------task6 with input ------email---------

let btn = document.querySelector('#button')
let input = document.querySelector('#text')

let regex = new RegExp(/^((\+49)|(0049))(\s|)((\d{11})|(\d{10}))$/)

btn.onclick = function () {
    if ( regex.test(input.value) ) {
    input.classList.add('valid')
    input.classList.remove('invalid')
}else{
    input.classList.remove('valid')
    input.classList.add('invalid')
}
 
}


//*---------website----------------
// creat a regex to check site name //  www.digitalcareerinstitute.org
// ^(\www.)\w*(\.org)|(\.com)|(\.de)

let input2 = document.querySelector('#input2')

let regex1 = new RegExp(/^www\.\w{2,}\.\w{2,}$/)
btn.onclick = function () {
    if ( regex1.test(input2.value) ) {
        input2.classList.add('valid')
        input2.classList.remove('invalid')
}else{
    input2.classList.remove('valid')
    input2.classList.add('invalid')
}
 
}

//*-----------------------------------
//to check ip adress   //127.123.0.1   // ip addres contain 4 numbers separated by . and each teil should be [0-255]


let input3 = document.querySelector('#input3')

let regex2 = new RegExp(/^(?=.*[^\.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$/)
btn.onclick = function () {
    if ( regex2.test(input3.value) ) {
        input3.classList.add('valid')
        input3.classList.remove('invalid')
}else{
    input3.classList.remove('valid')
    input3.classList.add('invalid')
}
 
}