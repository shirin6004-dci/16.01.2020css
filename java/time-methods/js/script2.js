let i = 0

// while (i < 10) {

// }

let bla = setInterval(() => {
    //document.write(i + '<br>')
    document.querySelector("#sp1").innerText = "00"
    i++
    if (i == 100){  //!
        clearInterval(bla)  //!   stop it with clearInterval
    }
},100 )

