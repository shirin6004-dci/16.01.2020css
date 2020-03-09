//*===================SEND()==========================================


let xhr = new XMLHttpRequest()   //! 1
xhr.open('POST' ,'https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency' )//!2


let obj = {             //! 3 what you want search
    "requests":[
        {"indexName":"ikea","params":"query=chees&hitsPerPage=16"}
      //?  {"indexName":"ikea","params":"(>>query= >>?chees)&hits(PerPage=>>?5&>>?page=2)"} 5chees in 2 page
    ]
}
xhr.send(JSON.stringify(obj))              //!4 make  string (json.stringify) >search to string >
xhr.onload = function () {              //! 5
    if (xhr.status == 200) {

         //  console.log(JSON.parse(xhr.response) )   //!6 convert to opj(json.parse) that > can work an that

        let findname = JSON.parse(xhr.response)
        console.log(findname.results[0].hits[0])
        //? i want to show all details af a product in HTML 
        let showinHtext = ' '
        findname.results[0].hits.forEach(item => {
            showinHtext +=item.name + '    '
            showinHtext +=item.description + '    '
            showinHtext +=item.price + 'Euro' +'    '
            showinHtext +=`<img src=" ${item.image} " height = 100px >  <br> ` //? easy way with backkotaishen
        });
        document.write(showinHtext)
        document.close()  //! wenn is load than close it 

     
        
    }else{
        console.log(xhr.status)
    }
}