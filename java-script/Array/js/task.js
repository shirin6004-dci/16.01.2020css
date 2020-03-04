let x = [ 2,4,1,9,5,7,6,3,2,7,1]

function show(arr1) {
    for (let i = 0; i < x.length; i++) {
    document.write(arr1[i] + "<br>")
    
}

}//show( x)

//=======================MIN**=======
function findsmallest(arr1) {
    let thesmalles = arr1[0]
    for (let i = 1; i < arr1.length; i++) {
        if (arr1[i] < thesmalles) {
            thesmalles = arr1[i]
            
        }
        
    } return thesmalles
}document.write(findsmallest(x) + "<br>") 
  



//===================!!!!!!!!!MAX***!!!!!!!!!!!!!!!!!
let y = [ 1,4,7,6,9,3,5]

function findgratest(arr2) {
    
    let thegrates = arr2[0]
    for (let x = 0; x < arr2.length; x++) {
        if (arr2[x]>thegrates ) {
            thegrates = arr2[x]
            
        }
        
    }return thegrates 
}
document.write(findgratest(y) + "<br>") 

//====================================***************===

/*let z = [2,5,3,4]

function avr(blaarr) {
    
    let sum = 0
    for (let s = 0; s < blaarr.length; s++) {
        
        sum += blaarr[s] 

    }return sum / blaarr.length

}document.write(avr(z))
*/


//===========================SORT ================
let number = [2,6,8,9,4,1]   // just  sort for 0-9 
document.write(number.sort()+ "<br>") 


//=========sort with func================

let number1 = [2,6,8,4,9]
function f1() {


    document.write(number1.sort())
    
}f1(number1)

//=====================================
 