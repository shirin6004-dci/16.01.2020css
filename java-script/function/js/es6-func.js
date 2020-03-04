

//=======that is func too same as top=======
/*let blafunc = function (){
    console.log(msm)
  }  
  blafunc ("i am same func too") */

//  ------------------- Arrow function --------------- that is just a new way to write func
// if you have just one PARAMETER  you dont need add ()
/*let blafunc = () => {
    console.log("hi")
}
blafunc()*/

//----------BEI SPIEL arrowfunction-------

let blafunc1 = message => {
    console.log(message)
}
blafunc1("i am just one PARAMETER") ;


//=============IIFE==== function====;=== WE DONT NEED IT USULLY***********=

/*(function () {
    console.log("hi i am new func")
    
})() */




//=============bei spiel for ARROW FUNCTION========================

let arrowfunction = num => {
    if (num == 0){
       return num 
    }else {
        return arrowfunction(num - 1 ) + "," + num
    }
    
}
console.log(arrowfunction(3))