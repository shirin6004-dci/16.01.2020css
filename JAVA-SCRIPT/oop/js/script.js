let x = {}
document.write(typeof x + '<br>')

//! make a methode
x.bla = 1212
x.bla2 = 'shirin'

x.mul = function(num){
    return this.bla * num    //!
}
document.write( x.mul(3) + ' : x' +'<br>' )  //--print x   

let y = {...x}   //!    copy  von x 
y.bla = 1515
document.write( y.mul(2) +' : copy von x '+ '<br>')  //-- print copy von x


document.write( '<br>' + '</br>')

//==========other=====bei spiel=========name/lastname sind proprty=is like varibel=========methode sind like function======

let teacher = {}

teacher.name = "ahmad"
teacher.lastName = "osman"
teacher.vollName = function(){
    return this.name + ' ' + this.lastName
}
document.write(teacher.vollName() + '<br>')

let student = {...teacher}
student.name = "shirin"
student.lastName = "valizadeh"
document.write(student.vollName() + ' : copy' +'<br>')