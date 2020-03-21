//* e Events use
let link = document.querySelector('#somelink')

link.onclick = function (e) {
    console.log('hallo world')
    e.preventDefault()   //! kill all default action  >>  e.preventDefault() 
}

//-----other---example-----

let main =  document.querySelector('#mainDiv')
let sub = document.querySelector('#subDiv')

mainDiv.addEventListener('click', function () {
    console.log('i am main div')
})

subDiv.addEventListener('click', function (e) {
    e.stopPropagation()   //!stop runing maindiv   >>   e.stopPropagation();
    console.log('i am sub div')
})
//-----in html we use > this----------use this but we dont need it weil we write here mainDiv 
/* mainDiv.addEventListener('click', function () {
    console.log('i am main div' + this.id)
})
 */