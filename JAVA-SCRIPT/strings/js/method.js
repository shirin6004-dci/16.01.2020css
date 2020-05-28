
//========**search** find ckarakter  is like INDEXOF  will show position

//let str = "hallo world"
/*console.log(str.search("r")) */


//============= will return **SLICE** to us charakter from --- hier beispiel return (ha)=like **substr()
//console.log(str.slice(0 , 2))



/*function findIndex(str) {
        
        return  str.indexOf (" ") + 1

}
console.log(findIndex("hello world")) */


function find2(str2) {

    let txt = str2.indexOf(" ") + 1
    // ---indexOf show positsion ----dar inja migi ke az koja shoro be search kone 
    let txt2 = str2.indexOf( " " , txt) + 1 
    return txt2 
    //   return txt.index.Of (""  + str2.indexOf(" ") + 1) + 1
}
console.log(find2("hello world i am"))

//--------------------ARROW  bei spiel--------------------
/*let function  = textarrow => {

    return txt.index.Of (" ") + 1
    
} console.log(findIndex("hello world"))
*/