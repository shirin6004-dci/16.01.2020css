let arr = [2,9,-2]

try {
    document.write(arr(0) +'<br>')
} catch (error) {
    document.write(error +'<br>')
}

//-------------------------------------------------
document.write('<br>')

// i can make a error but for developer
function div(a , b) {
    if ( b == 0){
        let blaerr = new Error('i make a error ') //!
        throw (blaerr)          //!
    }else{
        return a/b
    }
}
//! i can cath it but wie first example

try {
    document.write(div(1,0) + '<br>')
} catch (blablarerror){
    document.write(blablarerror + '<br>')
}

//----------------------


function div1(a , b) {
    if ( typeof b == "string" || typeof a == "string"){
        let blaerrr = new Error('can not be string') //!
        throw (blaerrr)          //!
    }else{
        return a/b
    }
}
try {
    document.write(div1(1,"shirin") + '<br>')
} catch (bllerror) {
    document.write( bllerror + '<br>')
}finally{            //
    document.write( "i am gonna shown anyway " + '<br>')
}
