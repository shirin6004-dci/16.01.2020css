// ---task2 ---creat user form wich contains input for the name , input for bday input , textarea for about 
//bottun to save in local storage 
//open page user show the form already filled with his data and user can update again
let nameinput = document.querySelector('#name')
let bthdinput = document.querySelector('#bthd')
let textarea = document.querySelector('#area')


//get data from local storage
let mejson = localStorage.getItem('user')  //!1 get localStorage



//check data is emty
if (mejson != null) {
    let meobj = this.JSON.parse(mejson)  //!5 convert obj to opj
    nameinput.value = meobj.name   // 2 obj that we make(name)  put inside input='name'
    bthdinput.value = meobj.bthd   // 3
    textarea.value = meobj.area     //4
}  

document.querySelector('#btn').addEventListener('click' , function (){
    let me = {          //! make opject
        name : nameinput.value,   //2 
        bthd: bthdinput.value,      //3
        area : textarea.value       //4
    }
    localStorage.setItem('user' , JSON.stringify(me))  //! 1 put it inside localstorage and convert to text
})
