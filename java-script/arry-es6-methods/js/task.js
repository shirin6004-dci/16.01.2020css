let arr = [1,5,5,6,1,1,5,7,8,-1]   // adade dakhele [ value]

/*function f1(arr , num) {
    let result = 0
    
    arr.forEach(function(item){

        if (item === num) {
            result +=1
        }
})
return result
}//document.write(f1 (arr , 1)) */
 //---------------------------------

 function f2(arr , num) {
     let stor = 0

     for (let i = 0; i < arr.length; i++) {
         if (arr[i] == num) {
              stor++
         }
         
     }return stor
 }
 //document.write(f2(arr , -1)) 





//===============errow function=========
/*let sor = (arr , n=arr.length) =>{

        if (n == 0 ){
            return arr
        }

     for (let i = 0; i < n-1; i++) {
         
         if (arr[i] > arr[i+1] ) {
             
           [ arr[i], arr[i + 1]] = [arr[i+1] , arr[i]]
         }
     }  
     return sor (arr , n - 1 ) 


}
document.write(sor([5,6,12,52]))
*/


//=================SEARCH inside array========

let arr1 = ["ahmad","tim" , "safa" , "shirin" , "wael" , "Allen" , "abdolrahman" , "hamod" , "felix" ,"felix" ,"neda" , "manish" , "chymky" , "bashar" ,"rebeka" , "bela" , "faroq" , "haron"]


function f3(arr , ch) {
  
    let storage = 0

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i].indexOf(ch.toLowerCase()) != -1 ||  arr[i].indexOf(ch.toUpperCase()) != -1) {
            storage++
        }
        
    }return storage
    
}document.write(f3(arr1 , 'a'))