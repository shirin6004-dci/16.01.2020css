//* increas speed box
 

let gameCanvas = document.getElementById("gameCanvas");

let ctx = gameCanvas.getContext("2d");
//draw1 a horzintal line 
ctx.moveTo(0, 100); // x , y 
ctx.lineTo(600, 100); // x , y 
ctx.strokeStyle = 'red' // line color




//draw2 a box an the right side 
ctx.fillRect(580, 79, 20, 20)

//ctx.fillRect(560, 79, 20, 20)//draw6  another box
let boxCreat = 560

/* function f() {
    var interval = 1001;
    timer = function() {
        --interval;
        //do your thing here

        if (interval >= 40) {
            setTimeout(timer, interval);
        }
    };
        timer();
}
 */

    let  boxinterval= setInterval(() => {
    ctx.clearRect(boxCreat + 20, 79, 20, 20) //7clear
    ctx.fillRect(boxCreat, 79, 20, 20)

    if (boxCreat == 0) {
        boxCreat = 560

    } else {

        boxCreat -= 20
    }


}, 100);



//draw3 Img
let img = document.createElement('img')
img.src = './img/player_big.png'
let status = false   //6 jumpping
let boxSpeed = 100
img.onload = function () {

    //4moving
    let moving = 0
 let moveinterval = setInterval(function (e) {

        ctx.clearRect(0, 39, 48, 60) //5 clear last one ( imgx ,imgy, w , h )       
        if (moving == 336) { //4
            moving = 0
        } else { //4
            moving += 48
        }
        //6 jumpping
       ctx.clearRect(0, -30, 48, 60)
        if (status == false) {
            ctx.drawImage(img, moving, 0, 48, 60, 0, 39, 48, 60) //3 context.drawImage(img,sx,slicey,imgwidth,imgheight,x,y,width,height);            
        }       
        if (status == true) {
            ctx.drawImage(img, moving, 0, 48, 60, 0, -30, 48, 60)
           
        }
        if (boxCreat <= 38 && status == false) {  //!7 crash (treff mit box)
            console.log('crash');
            clearInterval(boxinterval)    //!7 if crash than stop
            clearInterval(moveinterval)  //!7 if crash than stop
            // crash text 8
            ctx.font = '40px Arial'
            ctx.fillStyle = "red";
            ctx.fillText('!!Crash' , 200 , 50)
        
        }
     //!8  Scores
        if (boxCreat <= 38 && status == true) {                
           let span = document.querySelector('#scor')           
          span.innerHTML = eval(span.innerHTML) + 1
      
        }
    }, 200);

    ctx.stroke();

    window.onkeypress = function (e) {   //6 

        // console.log(e);
        if (e.which == 32) {
            status = true   
        }
        setTimeout(() => {     //! 6 
            status = false
        }, 250);


    }



}