let div1 = document.querySelector('.container>div:nth-child(1)');
let div2 = document.querySelector('.container>div:nth-child(2)');



let div1touch = false
div1.addEventListener('touchstart', (e)=>{
    div1touch = true
    check()
})
div1.addEventListener('touchend', (e)=>{
    div1touch = false
})



let div2touch = false
div2.addEventListener('touchstart', (e)=>{
    div2touch = true
    check()
})
div2.addEventListener('touchend', (e)=>{
    div2touch = false
})


function check() {
    if (div1touch && div2touch) {
        alert('touch')
    }
}


//?






/* 
window.onload = () => { let div1 = document.querySelector('.container>div:nth-child(1)') let div2 = document.querySelector('.container>div:nth-child(2)') let div1_IsTouched = { value:false } let div2_IsTouched = { value:false } div1.ontouchstart = () => { div1_IsTouched.value = true if (div1_IsTouched.value && div2_IsTouched.value) { alert('the are touched') } } div1.ontouchend = () => { div1_IsTouched.value = false } div2.ontouchstart = () => { div2_IsTouched.value = true if (div1_IsTouched.value && div2_IsTouched.value) { alert('the are touched') } } div2.ontouchend = () => { div2_IsTouched.value = false } }  */