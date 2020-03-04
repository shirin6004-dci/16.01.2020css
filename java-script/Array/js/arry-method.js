let numbers = [1,3,8,2,4,6,7]

document.write(numbers.toString() + "<br>")  // make string 
document.write(numbers.join("-") + "<br>")  // make string and put what between

//======================================

numbers[numbers.length] = 33            // you can put a new items it at the end 
document.write(numbers.toString() + "<br>")


numbers[numbers.length] = 55            
document.write(numbers.toString() + "<br>")



numbers.push(66)            // push at the end too
document.write(numbers.toString() + "<br>")

//========================================
numbers.pop()            // delet **last items
document.write(numbers.toString() + "<br>")


//========================================
numbers.shift()
document.write(numbers.toString() + "<br>")   // delet **first items


numbers.unshift(100)                         // put a items at a first
document.write(numbers.toString() + "<br>")

//========================================

//delete numbers[3]      // delet a itams egal wo  but position ist there
//document.write(numbers.toString() + "<br>")

//=======================================
//numbers.splice(4,1)      i can delet itams (1 itam) after 4position(indexof)
numbers.splice(4 , 0 , 5)   // in 4position will deletet 0 an put 5 
document.write(numbers.toString() + "<br>")

numbers.splice(4 , 0 , 11,12,13)   // we can put many numbers !!or **Arry inside Arry  [55,66,77] 
document.write(numbers.toString() + "<br>")

//===============================

let number1 = [3,3,3,3,3,3,5]
let number2 = number1.concat(numbers)
document.write(number2.toString() + "<br>")  //concat** will make copy** will not change number1 & numbers
document.write(numbers.toString() + "<br>")

//=======================================
let number3 = numbers.slice(1 , 3) 
document.write(number3.toString() + "<br>")

//========================================

let number4 = ["ahmad" , "tim" , "manish" , "safa " , "hamoud" ]
document.write(number4.sort() + "<br>")   // sort ALPHABET
document.write(number4.reverse() + "<br>")  //  sort != reverse
//=======================================
numbers.sort((a,b) => {return a-b })  //  erro func   ?if you want to make number sort
document.write(numbers.toString() + "<br>")

//========================================

let num = [20 , 5 , 10 , 0]

function f1(n) {
    let min = n[0]
    for (let i = 1; i < n.length; i++) {
        
        if (n.length[i] < min) {

            min = n[i]
        }
        
    }return min

}f1(num)

