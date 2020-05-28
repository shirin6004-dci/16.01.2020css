function getsecend(text) {

    let y = text.indexOf(" ") + 1 
    let txt2 = text.indexOf( " " , y) + 1 
    return text.slice( y , txt2 - 1)
    // slice will cut charachters " b.p secend word " ( -hier , -bis )
}
console.log(getsecend("hi my world"))