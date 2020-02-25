//=======arr[i][i]==================

let numbrs = [
    [-3, 4, -4, 41, 52, 6, 22, 4, 55, 11],
    [4, 22, 89, 74, 74, 63, 85, 4, 55, 11],
    [9, -33, 0, 41, 52, 23, 12, 96, 74, 85],
    [22, 445, 90, 67, 5, 6, 23, 4, 55, 45],
    [-5, 4 - 66, 89, 56, 5, 6, 34, 4, 55, 56],
    [32, 66, 78, 7, 5, 6, 22, 4, 55, 78],
    [99, -44, 67, 7, 12, 6, 34, 45, 55, 55],
    [12, 6, 56, 7, 23, 6, 22, 4, 55, 554]
]


//----------tamrin------------or--  **forEach inside **forEach------------

/*function printnewline(arr) {
    arr.forEach(item =>{
        item.forEach(secendItem =>{
            document.write(secendItem + "<br>")
        })
    })
    
}

printnewline(numbrs)
*/


//-----------------tamrin SUM--------------------

/*function f1(arr) {
    let sum2 = 0
    arr.forEach(itms => {
        let sum = 0              // for Each one shuld be sum = 0 
        for (let i = 0; i < itms.length; i++) { // bayad itms.length neveshte beshe esme function baraye forEach

            sum = sum + itms[i]
            sum2 += itms[i]
          
        }
        document.write("result : " + sum + "<br>")
    })
    document.write(sum2 + "<br>")
}

f1(numbrs)

*/
//-------------forEach inside forEach------------------------------



/*function f2(arr1) {
                summ3 = 0
    arr1.forEach(items => {
                summ = 0
        items.forEach(secenitem =>{
                summ += secenitem
                summ3 += secenitem
        })
        document.write(summ + "<br>")
        
    })
    document.write(summ3 + "<br>")
    
}

f2(numbrs)
*/

//---------find max number---------

/*function bignumber(arr) {
 let big = arr[0][0]   //numbers[0][0]
    arr.forEach(item =>{
           
        item.forEach(secendItem =>{
            if(big<secendItem){
            big = secendItem
            
            }
        })
               
    })
    return big    
}
document.write( bignumber(numbrs))
*/


//-----====================*******************=======wenn we dont know how many arry inside arry we have=============--
 

// ========== !! recursiv means you shuld call** **function **again

let mixarray = [
    "sh1" , 1 , ["sh2" , 2 , ["sh3" , 3 , ["sh4" , 4 , ["sh5" , 5,[]]]],["sh1-1" , 12 , []] , 6 ]
]



function f4(arrys) {

    arrys.forEach(itms => {

         if (typeof(itms) == 'string'){

          document.write( itms + '<br>') 
        }else if ( typeof(itms) == 'object'){
                        f4(itms)
        } 
     
    });
    
}

//f4(mixarray)


//================================



function strrevers(str) {
    return str.split("").reverse().join("")
}
document.write(strrevers('shirin')) 





// let str = "shirin"
// let arrrr = str.split("")
// document.write(arrrr.reverse().join(""))