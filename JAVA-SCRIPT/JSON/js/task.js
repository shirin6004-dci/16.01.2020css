let xhr = new XMLHttpRequest()
xhr.open('Get' , 'https://api.chucknorris.io/jokes/random')
xhr.send()

xhr.onload = function () {
    if(xhr.status == 200){
        let jokes = JSON.parse(xhr.response)  //! convert text(DATA) to OPJECT 1
        console.log(jokes.value)    //! SEE DATA 1
        document.write('<img src= " ' +jokes.icon_url +'" >' + '<br>') //! see image **IMPORTANT** 
        document.write('ID : '+ jokes.id + '<br>')  //!  
        document.write('jokes : ' + jokes.value)  //! 
    }else{
        console.log('error number ist : ' , xhr.status)
    }
}