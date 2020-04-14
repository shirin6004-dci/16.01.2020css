let animCanvas = document.querySelector('#animConvas')
let ctx = animCanvas.getContext('2d')
let status = 'running'
let imgTag = document.createElement('img')
imgTag.src = './img/player_big.png'
imgTag.addEventListener('load', function () { // first load img than drawImage 
    // ctx.drawImage(imgTag , 0 , 0 )   //ctx.drawImage(image, dx, dy);
    // ctx.drawImage(imgTag , 0 , 0 ,480,60)    //ctx.drawImage(image, dx, dy, dWidth, dHeight);
    // ctx.drawImage(imgTag ,0 ,0,48,60 , 0 , 0 ,50,60,)    //ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    //!  ctx.drawImage(imgTag ,firstphoto(0 ,0,48,60 ), where you want put(0 , 0 ,50,60),) 
    //!ctx.drawImage(imgTag ,secendphoto(48 ,0,48,60 ), 0 , 0 ,50,60,)    thirdphoto(96,0,48,60)

    let boxcounter = 460 //1 box first place
    let step = 0
    setInterval(() => {

        ctx.clearRect(step, 0, -30, 60)
        ctx.clearRect(step - 48, 0, 48, 60) //!   IMPORTANT clear last one
        if (status == 'running') { // 

            ctx.drawImage(imgTag, step, 0, 48, 60, step, 0, 48, 60)
            step += 48
            if (step == 384) {
                step = 0
            }
            if (step == 0) {
                ctx.clearRect(384 - 48, 0, 48, 60) // clear last one befor go to 0 
            }
        }
        if (status == 'jumpping') { //3
            ctx.clearRect(step - 48, 0, 0, 60)
            ctx.drawImage(imgTag, 432, 0, 48, 60, step, -30, 48, 60)
        }
        //! 1box com an boy
        if ((boxcounter + 40) > 48) {

            ctx.clearRect(boxcounter + 20, 30, 20, 20) // 1box clear (clear last box wenn moved)
        } else {
            if (status == 'jumpping') {
                console.log('win')
            } else {
                console.log('crash')
            }
        }
        ctx.clearRect(boxcounter + 20, 30, 20, 20)
        ctx.fillRect(boxcounter, 30, 20, 20) //1box place (moving )
        boxcounter -= 20 // 1box step
        if (boxcounter == 0) {
            boxcounter = 460
        }

    }, 150);


})

//!2click jumpping
animCanvas.addEventListener('click', function () {
    status = 'jumpping' //3
    setTimeout(() => { //jumpiing will take time than you can see that 
        status = 'running'
    }, 150);
})