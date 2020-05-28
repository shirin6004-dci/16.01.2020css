// 'https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency');


$(document).ready(function () {
    
/*     $.ajax({
        type: "method",// get or   post or    update 
        url: "url",// ./data.json
        data: "data", // data to send
        dataType: "dataType", //data type json , text
        success: function (response) {
            
        }
    });
 */
/* 
    $.ajax({
        type: "Get",     
        url: "./data.json",         
            
        success: function (response) {
            console.log(response);
            
        },
        error: function (error){
            console.log(error);
            
        }
        
    });
 */
let obj = {
    "requests":[
        {"indexName":"ikea","params":"query=table&hitsPerPage=1&page=1"}
    ]
}

$.ajax({
    type: "POST",  //!1

    url: 'https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency',  //!2

    data: JSON.stringify(obj), // CONVERT to string   //!3

    dataType: 'json',   //convert    //!4
    success: function (response) {   //!5
        console.log(response);
       
      $.each(response.results[0].hits, function (i,v) { 
       
        let name = response.results[0].hits[i].name
        let price = response.results[0].hits[i].price
        let rating =response.results[0].hits[i].rating

        let imgags = document.createElement('img')
        $('imgags').addClass('img')
           imgags.src = response.results[0].hits[i].image 


         let div = document.createElement('div')
         $('div').addClass('divclass')
         $('body').append(div)
         $(div).append(name)
         $(div).append(price)
         $(div).append(rating)
          $(div).append(imgags)
             
        });   
    }
});




});