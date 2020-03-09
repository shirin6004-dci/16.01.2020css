//*========================fetch====================



/* fetch('/data.json').then(response => {
    console.log(response.json())

}).catch(error => {

    console.log(error)
})
 */
//=====================
/* 
let getPromis = fetch('/data.json')
getPromis.then(response => {
    //console.log(response.json())

    if (response.status == 200) {
        let jsonPromise = response.json()
        jsonPromise.then(data => {
            console.log(data)

        }).catch(error => {
            console.log(error)
        })
    } else {
        console.log('error')
    }


}).catch(error => {
    console.log(error)
})
 */
//* ===============================================================


//? ===========get data using promis call - then().catch() =======================

let bringData = fetch('/data.json')     // 1
//console.log(bringData)
//console.log('i am fetch')
bringData.then(response => {            // 2
    //console.log(response)

    if (response.status == 200) {       //3
        //console.log(response)

        let dataPromis = response.json() //4   //! yet we can use them
        dataPromis.then(data => {       // 5
            console.log(data)
        }).catch(error => {
            console.log(error)
        })


    } else {                //6
        console.log('there were errors')
    }
}).catch(error => {         //7
    console.log(error)
})


//?===========================use Async  await=============================

async function getData() {                      // easy way
    let respo1 = await fetch('/data.json')      
    let dat1 = await respo1.json()       //! convert to object
    console.log(dat1)

}
getData()