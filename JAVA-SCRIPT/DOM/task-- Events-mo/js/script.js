
//*======================    first Event ===========window.onload====================

window.onload = function () {    //! window.onload
    //? any thin you put here will excuted after doucument is loaded
    printbody()  // 1 call func
}


function printbody() {   //1
    console.log(document.body)
}



//*======================  Event ========onclick in <body onclick ="blafunc()">
function blaclickEvent() {
    // alert('done')
    // console.log('click')
}



//*================= Event ondblclick ==========html >> <h2 ondblclick="bladoubleclick()">
function bladoubleclick() {
   // alert('done bladoubleclick')
    //console.log('bladoubleclick')
}


//*=================  Event mousOver=====html >> <h3 onmouseover="blaover()">
function blaover() {
    //alert('onmouseover!')
    //console.log('onmouseover!')
}



//*==========  Event onchange===========html>> <input type="text" onchange="change()" value="standard value" >
function change() {
   // console.log('change!!')
}



//*=======  Event press key=======html >> <input type="text" onkeypress="keypress()">

function keypress() {
    console.log('press key!!')
}