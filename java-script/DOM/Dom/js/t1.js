let element = document.getElementById('hi')
element.style.color = "red"

/*  
for (let i = 0; i < 100; i++) {
    
    let div = document.getElementById('div1')
     div.innerHTML += '<span style="font-size:'+i+'px" > fbw5</span> <br>'
    
}
 */

//-----------------------------------------------

/* let span = document.getElementsByClassName('sp1')
for (let index = 0; index < span.length; index++) {
    const element = span[index];
    element.style.color = "blue " 

    
}
 */

//--------------------------------------------------------

function change() {
   
    //document.getElementById('d1').innerHTML = "salam"
  let  sp = document.getElementById('d1').getElementsByTagName('span')
  for (let i = 0; i < sp.length; i++) {
      sp[i].innerHTML = i 
      
  }
}


function child() {
     document.getElementById('d1').childNodes[1].innerHTML="<a href= '#' >link </a>"
}