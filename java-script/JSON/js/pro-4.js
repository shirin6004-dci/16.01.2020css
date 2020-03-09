//*=======================exercise= promis=======================

/* function wh() {
    return  new Promise((resolve , reject)=>{  

       setTimeout(() => {
           resolve('hallo')
       }, 1000);
 
})
}
wh().then((v)=>{console.log(v) 
               console.log('world')})
 */


 //*=======================exercise= CALLBACK=======================


 function cal(value , cc) {
     setTimeout(() => {
         cc(value*2)        // or rebeca(value*2)
     }, 1000);
 }

function rebeca(bla) {
    console.log(bla)
}

 cal(5 , rebeca)


