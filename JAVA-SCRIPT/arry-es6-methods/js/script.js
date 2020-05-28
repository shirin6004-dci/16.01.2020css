let freuits = ["banana" , "apfel" , "wasermelone"]
/*for (let i = 0; i < freuits.length; i++) {
    
    document.write(freuits[i] + "<br>")
}*/


freuits.forEach(function(obst){

    document.write(obst+"1" + "<br>")
})

//====errow function   is SAME AS normal function
freuits.forEach((obst) =>{

    document.write(obst+"1" + "<br>")
})



//===========bar aks mishe 
freuits.reverse().forEach(function(obst){

    document.write(obst + "<br>")
})

//==============================

let check = false
freuits.forEach(function(obst){

    if (obst.indexOf("bla") != -1){
        check = true
    }   
})
document.write( check +"*" + "<br>")
