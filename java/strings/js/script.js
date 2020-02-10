// let blastring = "this is\t string "

// console.log(blastring + 7)

// console.log(typeof(blastring))

// let blanew = new String ("i am new")
// console.log(blanew)



// ----------=====------string-methodes-----====--------
// length is proprety and indexof is method


// let x = "hallo world"
// let len = x.length 
// console.log(len)


// let idx = x.indexOf("l" , 4)
// console.log(idx)

// let lidx = x.lastIndexOf("l")
// console.log(lidx)





// indexesFinder ("hakona matata" , "t" , 0)


// function indexesFinder(txt , chr , start) {
//     if (start < txt.length){
//         let idx = txt.indexOf(chr , start)
//         if(idx != -1){
//             console.log(idx)
//             indexesFinder(txt , chr , idx+1)
//         }
//     }
    
// }


txtadd (5)

function txtadd(num ) {

    if (num == 0){
            return num
        }else 
            {

            let a = txtadd(num - 1) + " , " + num
            return a
            
        }
       
        
}
console.log(txtadd(5))

        
