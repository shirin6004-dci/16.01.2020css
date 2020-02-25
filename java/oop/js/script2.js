

let person = {

    firstname: 'shirin' , lastname: 'valizadeh', byear:1990 , job: 'trainer' , married: true,
    
    age:function(){
       // return  prompt('enter : ') - this.byear    ----or----that is ok too
        let bday = new Date().getFullYear()       //!
        return bday - this.byear 

    }, 



    name:function(){
        return this.firstname + ' ' + this.lastname     //! make method **name
    },



    kids:['omar' , 'ali'],


    wife:{
        firstname: 'sh' , lastname: 'vali' , byear:1985 ,job: 'architect' ,name:function(){
            return this.firstname + ' ' + this.lastname     //! make method **name  for wife
        }
    },

    broders:[{firstname: 'br1' , lastname: 'matinfar1' } , { firstname: 'br2' , lastname: 'matinfar2' }]
        
   
       
  

}




document.write(person.name() + '<br>')     //==you call methode **name (methode hier is as a function)
document.write(person.kids[0] + '<br>')         // omar
document.write(person.age() + '<br>') //!


document.write('<br>')  //===========================================================================


document.write(person.wife.name() + '<br>') 
document.write(person.wife.age + '<br>') 
document.write(person.wife.lastname + ' :wife lastname' +'<br>')


document.write(person.broders[1].lastname + '<br>')         //!
