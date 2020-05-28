var names = ["ali","hasan","homa"]
function mysearch(name){
    for(var i=0 ; i<names.length ; ++i){
        if(names[i] == name){
            continue;
        }
        else 
           alert (names[i])
    }
}

mysearch("ali")


// function myobject() {
//     var text =""
//     var person = {fname:"ali" , lname:"alavi" , age:20 }
//     for(var x in person)
//     text += person[x] + "-"

//     alert(text)
    
    
// }
//     myobject()