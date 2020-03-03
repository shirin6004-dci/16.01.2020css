let blapromis = new Promise((resolve, reject) => {

        //you can call hier your onother promis .then(value =>{ put if and all there})
    if (true) {
        resolve("hi am a resolve")

    } else {
        reject("i am reject")
    }
})
blapromis.then((value) => {console.log(value)}).catch((value) => {console.log(value)})