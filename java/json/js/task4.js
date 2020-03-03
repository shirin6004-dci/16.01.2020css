//*=======================exercise========================

function newjoke(cb) { //!2

    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random')
    xhr.send()

    xhr.onload = function () {
        // console.log(xhr.response)                  
        if (xhr.status == 200) {

            let result = JSON.parse(xhr.response)

            cb(result.value) //!

        } else {
            console.log('error number ist : ', xhr.status)
        }

    }

}

function blacallBack(print) { //! callBack  1 function callback >> print after main function done
    console.log(print)
}


newjoke(blacallBack) //!    ( 2)>newjoke(blacallBack)<(1) 