//* ============ send()=======to search for each product= using   > > PROMPT ===========

function blagetProducts(blakeyword) {

    let xhr = new XMLHttpRequest() //! 1
    xhr.open('POST', 'https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency') //!2


    let obj = {"requests": [{  "indexName": "ikea", "params": "query=" + blakeyword + "&hitsPerPage=16"  }] } //! 3 what you want search        
        
    xhr.send(JSON.stringify(obj)) //!4 (json.stringify)
    xhr.onload = function () { //! 5
        if (xhr.status == 200) { //!6

            //  console.log(JSON.parse(xhr.response) )   //!6 convert to opj(json.parse) 

            let findname = JSON.parse(xhr.response) //!7
            console.log(findname.results[0].hits[0])
            //? i want to show all details af a product in HTML 
            let showinHtext = ' '
            findname.results[0].hits.forEach(item => { //!8
                showinHtext += item.name + '    '
                showinHtext += item.description + '    '
                showinHtext += item.price + 'Euro' + '    '
                showinHtext += `<img src=" ${item.image} " height = 100px >  <br> ` //? easy way with backkotaishen
            });
            document.write(showinHtext) //! 9
            document.close() //! wenn is load than close it 



        } else {
            console.log(xhr.status)
        }
    }
}
//blagetProducts('wein')
blagetProducts(prompt('write what you searching')) //! 10
