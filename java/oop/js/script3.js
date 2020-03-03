
//* ==============class opject  ==================================================


class Participant {  //!    Blaparticipant(className)   */begin with big capital!
    constructor(lastname,firstname){       // look like methode (function) 
            this.fname = firstname
            this.lname = lastname
    }
    fullname(){    //!   make method  to see all details     
        return this.fname + ' ' +this.lname
    }
}

let shirin = new Participant('valizadeh' , 'shirin')   //!    
document.write(shirin.fullname() + "<br>")


let safa = new Participant('boul' , 'safa')
document.write(safa.fullname() + "<br>")


let tim = new Participant('breuel' , 'tim')
tim.tattoos = true    //!  1
document.write(tim.fullname() + "<br>")


let belal = new Participant('sukari' , 'belal')
tim.tattoos = true    //!  1
document.write(belal.fullname() + "<br>")


document.write('<br>')//-------------------------------------

let parArr = [tim , safa , shirin , belal]    //! 

parArr.forEach(items => {           // function to see details
    document.write(items.fname + ' ' + items.tattoos +'<br>')  //! 1
});




document.write('<br>')//-------OR--with function----b.w- foreach inside function---------



/*function f2(f2paramert) {
    let storage = ''
    f2paramert.forEach(items => {
        storage += items.fname + "<br>"
})
    return storage
}document.write(f2(parArr)+ '<br>')*/

//------------------------

//============ example ==========

function f2(f2paramert , chr) {
    let storage = []
    f2paramert.forEach(item => {

        if(item.lname.indexOf(chr) != -1 ){
            storage.push(item)      //? gut point
        }
        
})
    return storage
}
document.write(f2(parArr , 'a')+ '<br>')


//-----------OR easy way


function f3filter(f3paramert , chr) {
    return f3paramert.filter(item => item.lname.indexOf(chr) != -1)  //? we use *FILTTER it is ~ same foreach
}
document.write(f3filter(parArr , 'a')+ '<br>')

document.write('<br>')//------------------

f3filter(parArr , 'a').forEach(items => {           //? gut point call to function 
    document.write(items.fname +'<br>')  //! 1
});

