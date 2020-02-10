function sum (nume1 , nume2)
 {
        //  let result = nume1 + nume2      
            // return result
        return (nume1 + nume2 ) 
       
}

// console.log(sum(3,5))


function sum (op , nume1 , nume2 )
 {
      
             switch (op) {
                case "+": 
                    return (nume1 + nume2)
                    // break

               case "-":
                    return (nume1 - nume2)
                    // break

                    case "*": 
                    return (nume1 * nume2)
                    // break

               case "/":
                    return (nume1 / nume2)
                    // break
                
                default :
                    return( "error")
                    break
             }  
                
            
        
     
        
       
}

// console.log(sum( "-",3,5))




function sum1 (op , nume1 , nume2 )
{
    if(op == "+"){
        return(nume1+nume2)
    }
    else if (op == "-"){
        return(nume1 - nume2)
    }
    else if (op=="*"){
        return(nume1 * nume2)
    }
    else if (op == "/"){
        return(nume1 / nume2)
    }

}

// console.log(sum1( "-",3,5))

function Even(number) {
    
    if (number  %2 == 0){
        return true
    }
    else {
        return false
    }
}

console.log(Even( 5))