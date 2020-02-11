let num1 = 555
console.log(num1.toString())  //make zahl to string**
console.log(num1.toString().replace("5" , "8"))   // === (/5/g , "8") replace**all 5

let str = "1234.4"
let str2 = parseInt("123.4")  // same as EVAL**   BUT!!!parsInt ist INT AND ASHARI !!parsFLOAT 
let str3 = eval("123.4")
console.log(typeof(str3))
console.log(typeof(str2))

//=======================================================================

let num3 = 2.254
console.log(num3.toFixed())  // raund** it and make **string

let num4 = 2.254
console.log(num4.toFixed(1)) // 1ragham ashar migire(1)