
/*function print( num, txt) {
   for (let i = 0; i < num; i++) {
      
       document.write(txt + "<br>")
   }
    

} print (3 , "hallo")

*/

//========================================== you can ***not add IF inside FOR 

function factor(num) {
     let sum = 1
    if (num < 0){
        return "ERROR"
    }else{
         for (let i = 1; i <= num; i++) {
        sum =sum * i    
    }
    }  
    return sum
    
}//document.write(factor(4))


document.write("=".repeat(20 )  + "<br>")
//======================== call other function 

function factors(num1 , num2) {
  
    if ( num1 > num2 ){
        for (let x = num1 ; x <= num2; x ++) {
            document.write(factor(x) + x + "!" + "<br>" )
                           
        }
    }else if ( num1 < num2 ){

        for (let x = num2 ; x >= num1; x --) {

            document.write(factor(x)+" <br>" + x + "!" + '<br>' )            
        }
    }
    
}factors(10 , 15 )


//====================================





