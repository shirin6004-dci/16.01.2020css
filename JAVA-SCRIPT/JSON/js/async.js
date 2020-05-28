let grade = 60      
let stop1year = true

let blaPromis = new Promise((resolve , reject)=>{       //! promis1
        if (grade >= 60){ 
            resolve('you will be developer')
        }else if (grade < 60){  
            reject('just a Assistant')
        }
})

let blapromis2 = new Promise ((resolve , reject)=>{     //! promis2
    if (stop1year){
        resolve(true)       //? async
    }else{
        reject(false)       //? async
    }
})



blaPromis.then((massage)=>{                 //!   than().catch()
  // console.log(massage) 
    blapromis2.then(()=>{console.log('you stop 1 year,are you assisant now')}).catch(()=>{console.log(massage)})

}).catch((errormassage)=>{ 
     //   console.log(errormassage)
        blapromis2.then(()=>{console.log('you did not stop ist every thing gut')}).catch(()=>{console.log(errormassage)})
    })    
      
    
 //* ----------use Async-------------------------------------------------

 async function checkwork(){            //? async     wenn we use async {we dont***need write than()catch()}
     let massage = await blaPromis      // first promis
     let isstop = await blapromis2      // secend promis
     console.log(massage)
     console.log(isstop)
 }   
 checkwork()                    // call it