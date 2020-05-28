let div = document.querySelector('#container')
let p = document.getElementsByTagName('p')

div.addEventListener('wheel', zoomfunc); // deltaY> bala -    / paeen +

 let font = 16 // counter for fontSize
function zoomfunc(e) {
    console.log(e.deltaY);

    if (e.deltaY > 0) { // if +                 
        font++
  
    } else {
        font--
        
    }

    this.style.fontSize = font + 'px'
}