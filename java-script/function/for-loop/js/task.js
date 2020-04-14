/*for (let i = 0; i < 10; i++) {

    for (let x = 0; x < 10; x++) {      // 10ta az in
        document.write("*" + "<br>")
        
    }
    document.write( "\\\\\\" + "<br>")  //yeki az in 
    
}*/
//======================5 * 5 setare chap mikone=======================


/*for (let i = 0; i <5; i++) {
    for (let x = 0; x < 5; x++) {
        document.write("*")
    }
    document.write("<br>")
}
*/

//==========================jadval zarb===========================

/*for (let i = 1; i <= 10; i++) {
   for (let x = 1; x <= 10; x++) {
      //malt = " "
    let  malt = x*i
     document.write( i + "x" + x + "=" + malt +"<br>" )
       
       
   }
    document.write("<br>")
}
*/

//==============================================

/*for (let i = 0; i <= 4; i++) {

    for (let x = 0; x <= i; x++) {
        document.write("*")
    }
    document.write("<br>")

}
*/
//==================reserv ===========================

/*for (let i = 4; i >= 0; i--) {
   for (let x = 0 ; x <= i ; x++) {
       document.write("*")
       
   }
    document.write("<br>")
} */

//------or

/*for (let i = 0; i <= 4; i++) {
    for (let x = 4; x >= i; x--) {
        document.write("*")
        
    }
    document.write("<br>")
}*/

//=============================================

/* for (let i = 0; i <= 4; i++) {
     for (let x = 4 ; x >= 0; x--) {

          if (i<=x ){         // (i+x) >= 4
              document.write('&nbsp&nbsp')
          }else{
              
              document.write("*")
          }
    
        // document.write('*')
     }
    
 document.write("<br>")   
 }

*/


//======================================================

// for (let i = 0; i <= 4; i++) {
//     for (let x = 0; x <= 4; x++) {
//        if (x == 0 || i== 0 || i == 4 || x==4) {
//            document.write("*")
//        }else{
//         document.write('&nbsp&nbsp')
//        }
        
//     }
//     document.write("<br>")
// }

//================================


// i can delet = ** than i shuld write x == num - 1  / i == num - 1 / (x+i) == num - 1 
function box(num) {
    for (let i = 0; i <= num; i++) {
    for (let x = 0; x <= num; x++) {
       if (x == 0 || i== 0 || i == num || x==num || x==i || (x+i)== num)  {
           document.write('*')
       }else{
        document.write('&nbsp&nbsp')
       }
        
    }
    document.write("<br>")
}


    
}box(10)



