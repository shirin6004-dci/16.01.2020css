// function hop(num) {
//     if(num != 0){
//        console.log(hop(num -1))
//     }
//      return (num)
// }
// hop(5)


function add(num) {
    if (num == 0){
        return 0
    }else{
        return add(num - 1) + num
    }
    
}
console.log(add(5))


// function fibonacci(num){
//     var a = 1, b = 0, temp;
  
//     while (num >= 0){
//       temp = a;
//       a = a + b;
//       b = temp;
//       num--;
//     }
  
//     return b;
//   }
//   console.log(fibonacci(5))


function x(num) {
    if (num != 1){
        return x(num - 1) * num
    }
    return 1
    
}
console.log(x(5))

