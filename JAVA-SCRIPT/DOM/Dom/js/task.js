let pargraph = document.getElementsByTagName('p')

/* 
function blaclickEvent(num) {
 for (let i = 0; i < pargraph.length; i++) {
  
    pargraph[i].innerHTML = i+1 + "-pargraph"  
   document.write(pargraph.innerHTML)
}
}
blaclickEvent(100)



 */

 //* ==========add one =================
let clickcounter = 0

function blaclickEvent() {

  //? if (!pargraph[clickcounter].innerHTML) {       if i dont want to delet than i use this if
        pargraph[clickcounter].innerHTML = clickcounter + "-pargraph"
  //? }
    //pargraph[i].innerHTML += i+1 +  
    //document.write(pargraph.innerHTML)

    clickcounter++
}
blaclickEvent(100)


//*---------------- revome ------------------

function removclick1() {
    
    let p1 = document.getElementsByTagName('p')
    
    p1[clickcounter - 1].remove()
    clickcounter --
}
