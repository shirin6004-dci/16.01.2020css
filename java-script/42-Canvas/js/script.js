//get canvas element
let canvas1 = document.querySelector('#canvas1')
//work an conves
let context = canvas1.getContext('2d')
context.fillStyle = 'green'
context.fillRect(50,50,50,100)  //(x ,y , width , height)



// set convas lines color
context.strokeStyle= 'blue'
 



//drow empty rectangel
context.strokeRect(150,50,50,100)

//drow a line (startpoint)
context.moveTo(0,0)    //! start poin cann you reapet too
// drow line (endpoint)
context.lineTo(100,20)
 context.lineTo(50,20)  //! you can drow more as you want
context.lineTo(50,100) 

//drow curve
context.moveTo(50,10) 
context.quadraticCurveTo(200 , 200 , 20,30)   //*  (x1 , y1 , x2 , y2)  1for direction of the curve / 2 end point of the line


//*drow text
context.font = '30px Georgia'
context.fillText('shirin' , 200 , 200 )
//make line visibility
context.stroke()  //! thise line most be at the end (all lins visible)