//*     =====HARD WAY WITHOUT CLASS==== 

let tim = {
    firstName: 'tim' ,
    lastName: 'breuel',

    fullName: function(){
        return this.firstName + ' ' + this.lastName 
    },

    tattoos: true
}

let safa = {
    firstName: 'safa' ,
    lastName: 'breu',

    fullName: function(){
        return this.firstName + ' ' + this.lastName 
    },

    hijab: true
}

let shirin = {
    firstName: 'shirin' ,
    lastName: 'valizadeh',

    fullName: function(){
        return this.firstName + ' ' + this.lastName 
    },
    nice_hair: true
}

let belal = {
    firstName: 'belal' ,
    lastName: 'vadeh',

    fullName: function(){
        return this.firstName + ' ' + this.lastName 
    },
    hair: false
}








document.write(tim.fullName() + '<br>')
document.write(safa.fullName() + '<br>')
document.write(shirin.fullName() + '<br>')



