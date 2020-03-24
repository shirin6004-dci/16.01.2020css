//let produc = document.querySelector('.produc')
let pro = document.querySelector('.product div:nth-child(1) input')
let priseInput = document.querySelector('.product div:nth-child(2) input')
let quantiInput = document.querySelector('.product div:nth-child(3) input')
let resultspan = document.querySelector('.product div:nth-child(4) span')

//? here ist static( 1)
pro.addEventListener('keyup', function (e) {
    if (e.which == 13) {
        priseInput.focus()
    }
})



setEvent('keyup', priseInput, priseInput, quantiInput, resultspan, 'price')
/* priseInput.addEventListener('keyup', function (e) { //!priseInput    //?    or   'change'
    let price = eval(priseInput.value)
    let quanty = eval(quantiInput.value)
    calculator(resultspan, price, quanty)

}) */


setEvent('change', priseInput, priseInput, quantiInput, resultspan, 'price')
/* priseInput.addEventListener('change', function (e) {
    let price = eval(priseInput.value)
    let quanty = eval(quantiInput.value)
    calculator(resultspan, price, quanty)
})
 */

setEvent('keyup', quantiInput, priseInput, quantiInput, resultspan, 'quanty')
/* quantiInput.addEventListener('keyup', function (e) { //! quantiInput.
    let price = eval(priseInput.value)
    let quanty = eval(quantiInput.value)
    calculator(resultspan, price, quanty)
}) */



setEvent('change', quantiInput, priseInput, quantiInput, resultspan, 'quanty')
/* quantiInput.addEventListener('change', function (e) {
    let price = eval(priseInput.value)
    let quanty = eval(quantiInput.value)
    calculator(resultspan, price, quanty)
})
 */



/* 
function calculator(resultElement, price, quanty) {
    resultElement.innerText = price * quanty
}

 */

//* click on link  
let link = document.querySelector('#newproduct')
link.addEventListener('click', function (e) {
    e.preventDefault()

    //* no new line wenn produc1 is emty  ba (link)
    let productlink = document.querySelectorAll('.product div:nth-child(1) input') //?sotoni product1  migire
    let check = true
    productlink.forEach(element => {
        if (element.value.trim() == '') {
            check = false
            element.focus() //? khali bod focus kon
        }
    })
    if (check) {
        newproducr()
    }

})


//*======================= function
function setEvent(eventName, triggerElement, priceElement, quantityElement, resultElement, elementtype) {

    triggerElement.addEventListener(eventName, function (e) {

        let price = parseFloat(priceElement.value)
        let quanty = parseFloat(quantityElement.value)
        resultElement.innerText = (price * quanty) + ' EUR' //!
        //! HERE WE WANT SUM ALL total
        let spansarry = document.querySelectorAll('.product>div>span') //!1 get all span ( as a Arry) > querySelectorAll()
        // console.log(spansarry)  
        let storage = 0
        spansarry.forEach(element => {
            let innerValue = element.innerText.replace(' EUR', '') //!1 delet Euro
            let price = parseFloat(innerValue)
            storage += price
        });

        let sumtotal = document.querySelector('.sumtotal')
        sumtotal.innerText = storage + 'Euro'

        //*===========focus()
        if (elementtype == 'price' && eventName == 'keyup') { //! IMPORTANT do that if is 'price ' / 'keyup'   (DONT FOCUS wenn we have 'change ' / 'quanty')
            if (e.which == 13) {
                quantityElement.focus()
            }
        }

        //* enter an quanty
        if (elementtype == 'quanty' && eventName == 'keyup') {
            if (e.which == 13) {
                //* no new line wenn produc1 is emty  ba enter                
                let productchild = priceElement.parentElement.parentElement.children[0].children[0] //?3 step  find quanty (or first div)
                //?3console.log(productchild)

                //* check indexOf (but just  if) is ***lastchild make new line 
                let current = priceElement.parentElement.parentElement //2 get all row
                let allproducts = priceElement.parentElement.parentElement.parentElement //2 get hol product (products)
                console.log(allproducts)
                let childerenArry = Array.from(allproducts) //! 1 convert to arry all products
                // 2console.log(childerenArry.indexOf(current))
                // 2console.log(childerenArry.length)
                if (productchild.value.trim() != '') { //? 3step if is emty     trim()  remove spacing

                    if (childerenArry.length - 1 == childerenArry.indexOf(current)) { //2 if lenght-1 == indexOf 
                        newproducr() //! call function to creat new element
                    } else {
                        childerenArry[childerenArry.indexOf(current) + 1].children[0].children[0].focus() // 2 focus an first div>div>input(product1)
                    }



                }
            }
        }
    })
}

//* function to creat element
function newproducr() {
    let newdiv = document.createElement('div')
    newdiv.classList.add('product')

    //?first div
    let firstdiv = document.createElement('div')
    let productinput = document.createElement('input')
    productinput.Type = 'text'
    firstdiv.append(productinput)
    newdiv.append(firstdiv)

    //?secend div
    let secenddiv = document.createElement('div')
    let newPriceInput = document.createElement('input')
    newPriceInput.type = 'number'
    newPriceInput.setAttribute('min', '0')
    newPriceInput.value = '0'
    secenddiv.append(newPriceInput)
    newdiv.append(secenddiv)

    //?third div
    let thirddiv = document.createElement('div')
    let newquantityInput = document.createElement('input')
    newquantityInput.type = 'number'
    newquantityInput.setAttribute('min', '0')
    newquantityInput.value = '0'
    thirddiv.append(newquantityInput)
    newdiv.append(thirddiv)


    //?fourth div
    let fourthdiv = document.createElement('div')
    let newResultSpan = document.createElement('span')
    newResultSpan.innerText = '0 Euro'
    fourthdiv.append(newResultSpan)
    newdiv.append(fourthdiv)


    let productsdiv = document.querySelector('.products')
    productsdiv.append(newdiv)


    //*===========focus  
    productinput.addEventListener('keyup', function (e) { //?  (1 )here ist for all
        if (e.which == 13) {
            newPriceInput.focus()
        }
    })

    //*================get every element==dynamiclly============== 
    setEvent('keyup', newPriceInput, newPriceInput, newquantityInput, newResultSpan, 'price')
    setEvent('change', newPriceInput, newPriceInput, newquantityInput, newResultSpan, 'price')
    setEvent('keyup', newquantityInput, newPriceInput, newquantityInput, newResultSpan, 'quanty')
    setEvent('change', newquantityInput, newPriceInput, newquantityInput, newResultSpan, 'quanty')


    productinput.focus()

}



//* ====================print list=======================

function table() {
    let products = document.querySelectorAll('.products .product')
    console.log(products) // cann see what is inside
    // console.log(products[0].children)
    let table = document.querySelector('#printtable tbody')

    table.innerHTML = ''                 //! 4 easy way to remove old rows the table body        
    document.querySelector('#printsection .sumtotal').innerText = ''
    for (let i = 1; i < products.length; i++) {
        if (products[i].children[0].children[0].value.trim() == '') {
            products[i].children[0].children[0].focus()
            return
        }

     
    }

    for (let i = 1; i < products.length; i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        table.append(tr)
        tr.append(td1);
        td1.innerText = products[i].children[0].children[0].value
        console.log(td1)

        let td2 = document.createElement('td');
        table.append(tr)
        tr.append(td2);
        td2.innerText = products[i].children[1].children[0].value + 'Euro'

        let td3 = document.createElement('td');
        table.append(tr)
        tr.append(td3);
        td3.innerText = products[i].children[2].children[0].value


        let td4 = document.createElement('td');
        table.append(tr)
        tr.append(td4);
        td4.innerText = products[i].children[3].children[0].innerText

    }
    let sumtotal = document.querySelector('.sumtotal')
    document.querySelector('#printsection .sumtotal').innerText = sumtotal.innerText


}




let invoice = document.querySelector('#invoicegenerate')
invoice.addEventListener('click', function (e) {
    e.preventDefault()

    table()
})