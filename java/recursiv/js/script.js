 /*function hop(num) {
     if(num != 0){
        console.log(hop(num -1))
     }
      return (num)
 }
 hop(5) */

 //==============================return=======================================

/*function add(num) {
    if (num == 0){
        return 0
    }else{
        return add(num - 1) + num
    }
    
}
console.log(add(5)) */

//==============================fibonacci============================================

 /*function fibonacci(num){
    var a = 1, b = 0, temp;
  
     while (num >= 0){
       temp = a;
       a = a + b;
       b = temp;
       num--;
     }
  
     return b;
   }
   console.log(fibonacci(5)) */

//==============================bei-spiel for return==================================================
function x(num) {
    if (num == 0){
        return num
         
    } else{
        let a = x(num - 1) + "," + num
        return a
    }
    
    
}
console.log(x(5))

//--------------------------------------------------

