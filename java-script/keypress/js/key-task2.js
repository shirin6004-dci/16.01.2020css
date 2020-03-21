/* let input = document.querySelector('#input1')

input.addEventListener('keypress', function (e) {

    if (e.which == 13) {
        let someinput = document.createElement('input') //creat input
        someinput.setAttribute('type', 'text') 
        container.append(someinput)
        someinput.focus()



    }
 
}) */
//* =======   presskey >>  after pressEnter to creat Input   .focus()  
let input = document.querySelector('#input1')  //  find input 

function creater (someinput) {

    someinput.addEventListener('keypress' , function (e) {
        if(e.which == 13){
            let container = document.querySelector('#container')   //find div(container)
            let newInput = document.createElement('input')  //! creat input
            newInput.type = 'text'                          //!type of input
            creater(newInput)  //! call function here
            container.append(newInput) //! put it at the end 
            newInput.focus()
        }
    })
    
}
creater(input)