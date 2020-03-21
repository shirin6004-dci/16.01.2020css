let btn = document.querySelector('#somebtn')

//! first way  add event dyanmicly
/* btn.addEventListener('click' , function () {
    alert('hallo')})
 */
//! secend way to add event dyanmicly 
/* btn.onclick = function () {
    alert('hello')
}
 */
//! you cann see dtails of event 
btn.onclick = function (event) {
    console.log(event)
    if (event.clientY>15){
        console.log('down')
    }else{
        console.log('up')
    }
}


let container = document.querySelector('#container')

    let someinput = document.createElement('input') //creat input
   // someinput.type = 'text'  // type of input 
   someinput.setAttribute('type' , 'text')  // secend way to set type
    container.append(someinput) 
    someinput.addEventListener('keypress' , function (e) {
        console.log(e)
    })