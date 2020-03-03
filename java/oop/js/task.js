/* let array = [-5, 6, 0, 6, 12, 3, 3]

function f1(arr) {
    let storage = []

    arr.forEach(item => {
        if (storage.indexOf(item) == -1) { //! IMPORTANT
            storage.push(item)
        }
    });
    document.write(storage)
}
f1(array)

 */

document.write('<br>****************************' + '<br>' ) //--------------------------
/* 

arr1 = [1, 0, 3, 4]
arr2 = [1, 2, 3, 4]

function check(a1, a2) {

    if (a1.length !== a2.length) {
        

    for (let i = 0; i < a1.length; i++) {

        for (let k = 0; k < a2.length; k++) {

            if (a1[i] != a2[k]) {
                return false
            }
            
        }
        

    }  
    return true
}
return false
}

document.write(check(arr1 , arr2) + '<br>' ) 

 */
//-------------------------------with 1for  wie can do that becuse we have arr1.lengh == arr2.lenght--------
/* arrc1 = [1, 2, 3, 4]
arrc2 = [1, 2, 3, 4]


function check2(c1,c2) {
    if (c1.length == c2.length){

            for (let c = 0; c < c1.length; c++) {
                
                if (c1[c] == c2[c]) {
                    return true

                }return false

                
            }


        return true
    }
    
}
document.write( check2(arrc1,arrc2) )
 */

document.write('<br>****************************' + '<br>' ) //--------------------------



/* ar1 = [-5, 1, 0, 10,1]
ar2 = [1, 6, 7, 0,1]




function f2(ar1,ar2) {
    let storage = []
    ar1.forEach(item => {
        if (ar2.indexOf(item) !== -1) { //! IMPORTANT
            if (storage.indexOf(item) == -1) //! 
            storage.push(item)
        }
    });
    document.write(storage)
}
f2(ar1,ar2)
 */
document.write('<br>****************************' + '<br>' ) //--------------------------

/* ar1 = [-5, 1, 0, 10,1]
ar2 = [1, 6, 7, 0,1]




function f2(ar1,ar2) {
    let storage = []
    for (let index = 0; index < array.length; index++) {
      
    
        if (ar2.indexOf(ar1[index]) !== -1) { //! IMPORTANT
            if (storage.indexOf(arr1[index]) == -1) //! 
            storage.push(item)
        }
   }
   
    document.write(storage)
}
f2(ar1,ar2)
 */

document.write('<br>****************************' + '<br>' ) //--------------------------
/* let = arr1[0,0,0,0,0]
function addIndexes(arr) {   
	return arr.map((val, i) => val + i);  //! IMPORTANT
} */


function addIndexes(arr) {
    let arr1 = []
	for ( i = 0 ; i < arr.lenght ; i++){
	 	 arr1.push(arr[i] + i) 

	}
	                                                                                                                                                                                                                                                                                                       
}
document.write(addIndexes([0, 0, 0, 0, 0])) 