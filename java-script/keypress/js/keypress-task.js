let input1 = document.querySelector('#someinput1')
let input2 = document.querySelector('#someinput2')
input1.addEventListener('keypress',function (e) {
    if(e.which == 13){
         input2.focus() 
      
        
    }
   input2.addEventListener('keypress',function (e) {
    if(e.which == 13){
         input1.focus() 
      
        
    }
   
   
})
   
})
