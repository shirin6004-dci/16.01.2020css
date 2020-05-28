//* if pass and user sind true

$(document).ready(function () {

    $('#loginBtn').click(function (e) {   //!1
        e.preventDefault();
        let check = true   //!4

        //check user is not empty
        let username = $('#userNameInput').val();  //!2
        if (!username.trim()) {

            $('#usernameAlert').removeClass('d-none');
            check = false  //!4
        }

        //PASSWORD
        let password = $('#passwordInput').val();  //!3
        if (!password.trim()) {
            $('#passwordAlert').removeClass('d-none');
            check = false   //!4
        }

//------or1--------


//if both are true
if (check) {    //!5 
    let sendDataObj = {  
        userName :username ,   
        password : password
    }
    $.ajax({     //!6
        type: "GET",
        url: "/usercheck.json",
        data: JSON.stringify(sendDataObj),
        dataType: "json",
        success: function (response) {
            console.log(response);
            //show  login error modal     
            if (!response.result) {
               $('#loginErrorModal').modal('show')     
            }else{
                //login success
                alert('success')
            }
      
        }
    });
}


//---------1-----
//========or 2=====
/*
        resultCheck().then(theResult => {
            if (theResult == false) {
                console.log('no');
                $('#passwordInput').addClass('show');
            }

        }).catch(error => {
            console.log(error);

        })

*/
//===========
    });

});
//=========or2======
/*
function resultCheck() {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "usercheck.json",
            data: "data",
            dataType: "json",
            success: function (response) {
                console.log(response);
                resolve(response.result)
            },
            error: function (error) {
                reject(error)
            }
        });
    })
} 
*/
//==============