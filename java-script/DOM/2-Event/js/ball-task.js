let container = document.querySelector('#container')

container.addEventListener('click' , function (e) {
    let ball = document.createElement('div')
   // or   ball.classList.add('ball')
   ball.setAttribute('class' , 'ball')
   //put ball inside container
   //console.log(e)
  //? container.append(ball)  
   //? alert(e.clientX + ' ' + e.clientY)
   ball.style.left =e.clientX-5 + 'px'  //! -5 is in the mittel css we have >  width: 10px;height: 10px;   
   ball.style.top =e.clientY-5 + 'px'

//*--------------exersice -----

let step = e.clientY-5    

let top1 = true
let i =e.clientY-5
let  interval = setInterval(() => {
    ball.style.top = i + 'px'
    if (top1) {
        i++
    } else {
        i--
    }
    if (i == 480) {
         top1 = false
        step += 50  
    }
    if (i == e.clientY-5) {

        top1 = true
    }
    if(i == step){  //!
        top1= true
    }
   if (i < step) {                1
     clearInterval(interval) 
      //ball.style.top1 = '490px' 
    }  


}, 1);

   container.append(ball)  
})




