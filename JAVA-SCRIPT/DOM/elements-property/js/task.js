/* 
let ball = document.querySelector('#ball')

let top1 = true
let i = 0
setInterval(() => {
    ball.style.top = i + 'px'
    if (top1) {
        i++          //!  i +=5   you can increas it ech step
    }else{
        i --             //! i -= 5
    }
             
   if (i == 180) {
        top1 = false
      
        
    } 
    if (i== 0) {
        
        top1 = true
    }
    
}, 10); */
//===============================================

let ball = document.querySelector('#ball')
let step = 0
let top1 = true
let i = 0
setInterval(() => {
    ball.style.top = i + 'px'
    if (top1) {
        i++
    } else {
        i--
    }
    if (i == 180) {
        step += 20
        top1 = false
    }
    if (i == step) {

        top1 = true
    }
    if (step == 180) {
        ball.style.top = "180px"   
    }

}, 10);