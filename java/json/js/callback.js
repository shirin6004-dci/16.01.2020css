//*=======================exercise= CALLBACK=======================

function funWD(num , call ) {
    setTimeout(() => {

         call(num*2)             // ?OR  blacallBack(num*2)      than you dont need have call  

    }, 2000);
}



function blacallBack(print) {           //* that is our callback func
    console.log(print)
}


funWD(5 , blacallBack)  // we have 2 paramiters  5 > num   /   blacallBack > call

