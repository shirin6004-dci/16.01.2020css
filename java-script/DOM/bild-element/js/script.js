//  window.onload = ()=>{}

let container = document.querySelector('#container')  //! 1
 let h3Element = document.createElement("h3")       //!  2  
 h3Element.id = 'h3id'  //* creat id inside element

 h3Element.innerText = 'fbw5'       //! 3 put inside h3
 container.append(h3Element)        //! 4 


//-------------
 let articleelement = document.createElement('p')
 articleelement.innerText = 'i am new Element p'
 articleelement.classList.add('clasList') //!     make class list need to use >> add()
 container.append(articleelement)  



//-----------add somthing inside --
 let span1 = document.createElement('span')
 span1.innerHTML = ' <br> i am span1'    //! innerHTML  ~ innerTEXT    FAST GLEICH

 articleelement.append(span1)       // to show span1  (where should be that)




 //* =======easy way to print 

 let h6 = `<h6> i am h1 </h6>` //! 10 
 let contain2 = document.querySelector('#contain2')  //!11  find your contain2(it is inside html)
 for (let i = 0; i <10; i++) {         //!12 
     
      contain2.innerHTML += h6      //! 13  put h1 inside contain
 }

