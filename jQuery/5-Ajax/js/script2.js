$(document).ready(function () {
    let obj = {
        "requests": [{
            "indexName": "ikea",
            "params": "query=chair&hitsPerPage=100&page=1"
        }]
    }

    $.ajax({
        type: "POST", //!1

        url: 'https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency', //!2

        data: JSON.stringify(obj), // CONVERT to string   //!3

        dataType: 'json', //convert    //!4
        success: function (response) { //!5
            let dataArry = response.results[0].hits

            let container =  $('.container')
            dataArry.forEach(hit => {      //!6

                let htmlString = `<div class="pruducts">
                <div>${hit.name}</div>
                <div>
                   <span class="gray"></span>
                  <span class="gray"></span>
                  <span class="gray"></span>
                   <span class="gray"></span>
                    <span class="gray"></span> 
                </div>
                <div>${hit.price}Euro</div>
                <div>
                <img src="${hit.image}" alt="" width="100px" height="100px">
                </div>
                </div>`

                // convert string to jquery dom element
                let htmlProduct = $(htmlString)   //!7
                //creat rate stars > we have spans we can ADDCLASS  just 
                htmlProduct.find('div>span').each((idx, star) =>{    //!8
                    if (idx < hit.rating) {
                        $(star).addClass('gold');
                        $(star).removeClass('gray');

                    }
                } )

                container.append(htmlProduct)   //!9


            });

            console.log(response);

        }
    });



});