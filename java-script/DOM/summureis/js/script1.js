window.onload = () =>{
    //* id ist just one than return OPJECT

    //-------getElements-----   RETURN ARRAY-------
    let fa = document.getElementsByClassName('fab')
    console.log(fa.length)

    //-------getElements---return arr---
    let h2 = document.getElementsByTagName('h2')
    console.log(h2)

//(return opj )weil select just first element or first child
    let firstelement = document.querySelector(".fo")  
    console.log(firstelement)


// return all elements
    let  allelements = document.querySelectorAll(".fo a")
    console.log(allelements)



  
 console.log($(".foo1 a"))      //1
}

function $(selectorText) {      //1
  return  document.querySelectorAll(selectorText)
    
}
