$(document).ready(function () {
    //* creat element and add event 

    let htmlString = '<div><p>Hello i am Pargraph <a href="#">click here</a> </p></div><script> alert("i am inside") </script>'
    let smallDom = $(htmlString)    //! muss put it inside a value than use it
    smallDom.find('a').click(function(e){    //! write value.find()
        e.preventDefault()
        alert('hi')
    })

    let  someBtn = document.createElement('button')
  //  someBtn.innerHTML = 'someBtn'
    $(someBtn).text('button');


 $('#container').append(someBtn);    //! (value)
    $('#container').append(smallDom);    //! (value)




});