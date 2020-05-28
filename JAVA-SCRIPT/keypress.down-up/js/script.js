
    let ball = document.querySelector('#container>div')
    let left1 = 0
    let top1 = 0        
    document.onkeydown = function (e) {
        console.log(e);
        if(e.key == 'ArrowUp'){
            top1-=10
        }
        if(e.key == 'ArrowDown'){
            top1+=10
        }
        if(e.key == 'ArrowRight'){
            left1+=10
        }
        if(e.key == 'ArrowLeft'){
            left1-=10
        }
        ball.style.top = top1 + 'px' 
        ball.style.left = left1 + 'px'  
}
    

