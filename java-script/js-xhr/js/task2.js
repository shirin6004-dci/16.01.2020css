//* --------------------exersice to have 2parameters----Z.B >> (blakeyword(query),change tedad dar yek safhe(&hitsPerPage) )----------
function blagetProducts(blakeyword,numpage , page ) {

    let xhr = new XMLHttpRequest() //! 1
    xhr.open('POST', 'https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency') //!2


    let obj = {"requests": [{  "indexName": "ikea", "params": "query=" + blakeyword + "&hitsPerPage="+numpage+"&page="+page }] } //! 3 what you want search        
        
    xhr.send(JSON.stringify(obj)) //!4 (json.stringify)
    xhr.onload = function () { //! 5
        if (xhr.status == 200) { //!6

        

            let findname = JSON.parse(xhr.response) //!6
            console.log(findname.results[0].hits[0])
            //? i want to show all details af a product in HTML 
            let showinHtext = ' '
            findname.results[0].hits.forEach(item => { //!7
                showinHtext += item.name + '    '
                showinHtext += item.description + '    '
                showinHtext += item.price + 'Euro' + '    '
                showinHtext += `<img src=" ${item.image} " height = 100px >  <br> ` //? easy way with backkotaishen
            });
            document.write(showinHtext) //! 8
            document.close() 

        } else {
            console.log(xhr.status)
        }
    }
}
//blagetProducts('wein')

blagetProducts(prompt('write what you searching'),prompt('how many in a page '),prompt('page number ')) //! 9
