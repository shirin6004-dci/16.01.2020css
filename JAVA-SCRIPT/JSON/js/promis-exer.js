//*----------normale function----------------------

function f2(x) {
    console.log(x)
}

//f2('hi')



//*---------------------exersice callback----------------

function f1( world ,cb) {  //!  1
    setTimeout(()=>{
        console.log(world)
        cb()        //! 2
    },1000)
}

f1('i am callback' , ()=>{                //! 3  callback  
    console.log('callback')
})

//*-----------------------promises----------------

let studi = true     //! 1

let blaPromis = new Promise((resolve , reject)=>{   //!2   new Promis((resolve , reject) =>{})
        if (studi){ //! 3
            resolve('you will be developer(promis)')
        }else{  //!4
            reject('maybe(promis)')
        }
})
blaPromis.then((massage)=>{console.log(massage) }).catch((errormassage)=>{ console.log(errormassage)})     //! 5  than().catch()
      
    
//*-----------------------Async ---------------------------
    
   

