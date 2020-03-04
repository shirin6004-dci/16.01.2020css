let numbers = [2, -2, 6, 3, 4]
let number2 = []

function f1(numbers) {

    numbers.forEach(item => {

        number2.push(item * 2)
    })

    //document.write(number2 + "<br>")
}


f1(numbers)


//-----map-is-same as forEach  but you need RETURN **----------------------

let number3 = numbers.map(item => { return item *3})
   
document.write(number3 + "<br>")


//===============FILTER===================

let blanumber = numbers.filter(items =>{return items > 0 && items < 4}) 
document.write(blanumber + "<br>")


//=======arr[i][i]==================


