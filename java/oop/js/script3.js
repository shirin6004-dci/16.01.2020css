class Participant {                         //******new  */
    constructor(lastname,firstname){       // look like methode  //! 
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