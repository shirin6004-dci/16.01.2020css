async function getproduct(blakeyword,numpage,page) {            //! 1
    let url = 'https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency'
    let obj = {"requests": [{  "indexName": "ikea", "params": "query=" + blakeyword + "&hitsPerPage="+numpage+"&page="+page }] } //! 3 what you want search        
    
    let response = await fetch(url , {              //!  2
        method : 'POST',
        body: JSON.stringify(obj)

    })
    let resultData = await response.json()              //! 3
    console.log(resultData)
} 
getproduct('cheese' , 10 , 1)           //!  4

//=====================================