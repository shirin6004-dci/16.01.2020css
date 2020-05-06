let btn = document.querySelector('#btn1')
btn.addEventListener('click', (e) => {
    console.log(e);

})

let divContainer = document.querySelector('#container')
divContainer.addEventListener('click', (e) => {
    // console.log(e)
    console.log('screenX :', e.screenX, ' ,screenY :', e.screenY);
    console.log('clientX', e.clientX, ",clientY", e.clientY);

})

// add scroll event
divContainer.addEventListener('scroll', e => {
    console.log(e);

    console.log(e.target.scrollTop); // wie weit of top   // or divContainer.scrollTop
    if (e.target.scrollTop) {
        e.target.style.color = 'red'
    } else {
        e.target.style.color = 'blue'
    }
    if (e.target.scrollTop > 16) {
        e.target.style.fontSize = e.target.scrollTop + 'px'
    }




})