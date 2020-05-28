window.onload = function () {
    // my data should be shown in the table 
    // tutorial link is https://www.cssscript.com/dynamic-data-table-vanilla-javascript/



    let myData = {
        "headings": ['product name', 'product price', 'quantity', 'total'],
        "data": [ //products

            ["screen", "50", "10", "50 Euro"],
            ["keyboard", "5", "10", "50 Euro"],
            ["mouse", "5", "10", "50 Euro"],
            ["screen", "50", "10", "50 Euro"]
           

        ]
    }

    let theTable = document.querySelector('#mytable')
    let myDataTable = new DataTable(theTable, { //! change  navigation options

        data: myData,
        nextPrev: false,
        searchable: true, // enable searchable

    })


    document.querySelector('#addRowbtn').addEventListener('click', function (e) {
       

        let productName = document.querySelector('#productnameinput')
        let productPrice = document.querySelector('#productpriceinput')
        let productquanty = document.querySelector('#productquantyinput')

        //! Adds new rows to the table.
        myDataTable.rows().add([productName.value, productPrice.value, productquanty.value, (eval(productPrice.value)* eval(productquanty.value)) + 'euro'])
       // after send will be empty
        productName.value = ''
        productPrice.value = ''
        productquanty.value = ''
    })


}


function addrows() {
    
}