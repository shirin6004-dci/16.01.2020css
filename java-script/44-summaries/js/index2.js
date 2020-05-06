//? 1 an save btn click username and Email valius should be 
//?save inside the local storage as one key

//?2 fill the imput whith data inside localstorage if Exist
let userNameIn = document.querySelector('#username')
let emailIn = document.querySelector('#email')
let btnSave = document.querySelector('#btn1')



// let arrPersonal = []


function call() {
    btnSave.addEventListener('click', function () {
        if (userNameIn.value.trim() != '') {
            let personal = {
                userName: userNameIn.value,
                email: emailIn.value
            }
            // arrPersonal.push(personal)
            localStorage.setItem('user', JSON.stringify(personal)) // convert as text
            // console.log(arrPersonal);
        }
        userNameIn.value = ''
        emailIn.value = ''
    })
}
 call()



let mejson = localStorage.getItem('user')
console.log(mejson);

if (mejson != null) {
    let meObj = JSON.parse(mejson)
    console.log(meObj); 
        userNameIn.value = meObj.userName
        emailIn.value = meObj.email


}