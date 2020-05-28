function jok() {    //! 1

    return new Promise((resolve, reject) => {   //!  func promis

        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.chucknorris.io/jokes/random')
        xhr.send()
        xhr.onload = function () {
            if (xhr.status == 200) {
                resolve(xhr.response)     //! if resolve

            } else {
                reject('problem')     //! if reject
            }

        }

    })
    
}
jok().then(print =>{ console.log(print)}).catch(error=>{ console.log(error)})  //! 1funcname().then().catch() 
    

   
