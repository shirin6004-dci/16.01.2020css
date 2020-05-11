$( function() {
   

// get input wenn **KEYUP
$('#productInput').keyup(function (e) {         //! 2
    //?console.log( $(this).val()); 
    let keyWord =  $(this).val();  //get what you type in input
   if (keyWord.length >= 2) {  //check if input value lenght >= 3


    //bild obj
    let obj = {
        "requests": [{
            "indexName": "ikea",
            "params": "query="+keyWord+"&hitsPerPage=5&page=1"
        }]
    }

    //ajax request  //!3 inside if
    $.ajax({
        type: "POST",
        url: "https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency",
        data: JSON.stringify(obj),
        dataType: "json",
        success: function (response) {
          //?  console.log(response);
       let productType =response.results[0].hits.map(element => element.type)  //!4get type(products) as a Arry
      //? console.log(productType);    
       runAutoComplet(productType)   // if succsses call 1
        }
    });
    //runAutoComplet(availableTags)   //call 1  dummy to testing
   }
});



  } );

/* 
dummy to testing
  let availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
 */


  function runAutoComplet(data) {   //call wenn i have data     //!1

   $( "#productInput" ).autocomplete({
        source: data,
        classes: {
          "ui-autocomplete": "autocompleteclass",
        },
        messages :{    //!5 or    show nothing after input wenn i didnt select
            noResults:'',
            results : function () { 
                return '';
            }
        }

      });
   //!5 or   $('#productInput').next().remove()
  }