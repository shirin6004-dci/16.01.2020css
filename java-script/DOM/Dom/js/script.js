// console.log(document.getElementsByTagName('h1'))   or

//? let x = document.getElementsByTagName('h1')
//? console.log(x[0])    //! [o] first h1 tag   

//* =====see all h1 ==1====

let y = document.getElementsByTagName('h1')

for (let i = 0; i < y.length; i++) {    //displaying all element
    console.log(y[i])
    
}
//*------------1----  OR

  for(let i of y){
    console.log(i)
}



//*-------------------1----  or
/* let blay = document.getElementsByTagName('h1')
Array.from(blay).forEach(Element =>{    //! Array.from(blay)    make as a ARRY
    console.log(Element)
}) */


//! INDEX IS ARRY arry[number ]
//! for OPJECT : opj["string"]   OR  opj.?name  and >> we can not use **forEach



//*===================================================================

let opj = {
    t: "t",
    b:"b",
    ob :{
        odd:5,
        st:[1,8,'some',{pr:true}]
    }
}
console.log(opj.ob)
console.log(opj.ob.st[2])       // some
console.log(opj.ob.st[3].pr)  // > true

//*=================innerHTML================
let dbyid = document.getElementsByTagName('h1')[0]
console.log(dbyid)
dbyid.innerHTML
console.log(dbyid.innerHTML)

dbyid.innerHTML = 'change h1'
console.log(dbyid.innerHTML)

//*-----------------------
let sh = document.getElementsByTagName('h1')[1]
sh.innerHTML = "text, number , arr , <html>"  
console.log(sh.innerHTML)





//*=================innerTEXT================
 document.getElementsByTagName('h1')[2].innerText = "text, number , arr not <html>"