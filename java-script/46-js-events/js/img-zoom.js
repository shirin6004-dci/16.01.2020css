let divcontainer = document.querySelector('#container')
let img = document.querySelector('#container>img')
divcontainer.addEventListener('mousewheel', zoomFunc)
let zoom = 1

function zoomFunc(e) {
    console.log(e);
  
    if (e.deltaY > 0) { // if +                 
        zoom += 0.1


    } else {
    zoom -= 0.1
      


    }

    img.style.transform = `scale(${zoom})`



}