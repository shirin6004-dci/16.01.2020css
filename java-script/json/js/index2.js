/* 
let xhr =new XMLHttpRequest()    

xhr.open('GET','/data.json') //!  
xhr.responseType = 'json' //!   type of data 
xhr.send()      //!         send data to server
xhr.onload = function (){  //!       came back data from server > need function
   console.log( xhr.response)
}
 */


//? wenn you have ERROR  =================================================


 let xhr = new XMLHttpRequest()

xhr.open('GET' , '/data.json')             //? data1 is wrong we dont have data1
xhr.responseType = 'json' 
xhr.send()     
/* 
let d = new Date()     1    //! take time to send  > sendTIME - backTIME = how many time kompletly we need 
console.log(d.getMilliseconds())
 */


xhr.onload = function (){  

       //*     console.time()   2- how many time take between them 
/* 
    let d = new Date()    1      //! take time to comeback
    console.log(d.getMilliseconds())
    
 */

    if(xhr.status == 200){
            console.log('all good')
            console.log( xhr.response)          //? show our data (what we send) b.w OPJECT
            console.log( xhr.statusText)   //? show ok wenn we have no ERROR
    }else {
            console.log('error ')
        //    console.log( xhr.statusText)


    }
      //*  console.timeEnd()   2-
   console.log( xhr.response)
}






