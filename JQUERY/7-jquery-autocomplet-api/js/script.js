var availableTags = [];


const inputSearch = $("#productInput");
inputSearch.autocomplete({
    source: availableTags,
});



inputSearch.keyup((e) => {   //! more than 3 charachter
    if (e.target.value.length > 2) {   // we long input ist
        renderData(e.target.value, 5, 1);
        inputSearch.css({
            border: "1px solid #66ff66",
            });
    } else {
        availableTags.length = 0;
        inputSearch.css({
            border: "1px solid #FF6666",
            });
    }
});

const renderData = (keyWord, numInPage, pageNum) => {
let obj = {
    requests: [{
        indexName: "ikea",
        params: "query=" +
            keyWord +
            "&hitsPerPage=" +
            numInPage +
            "&page=" +
            pageNum,
    }, ],
};
$.ajax({
    type: "POST",
    url: "https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency",
    data: JSON.stringify(obj),
    dataType: "json",
    success: function (response) {
        availableTags.length = 0; //! delet jedes mal
        let hitArr = response.results[0].hits;

        hitArr.forEach((hit) => {      //!
            availableTags.push(hit.type);  // push inside arr
        });
    },
    error: function (err) {
        console.log("ERROR", err);
    },
});
};
