$(document).ready(function () {
    
// code from https://vestride.github.io/Shuffle/
    let Shuffle = window.Shuffle;
    let element = document.querySelector('.container');
    let shuffleInstance = new Shuffle(element, {
        itemSelector: '.content',  
         
      });


 $('#btnpolitics').click(function (e) { 
    e.preventDefault();
         //filter
      shuffleInstance.filter('politics');
});
 

$('#btnsport').click(function (e) { 
    e.preventDefault();
         //filter
      shuffleInstance.filter('sport');
});
$('#btnall').click(function (e) { 
    e.preventDefault();
         //filter
         shuffleInstance.filter(Shuffle.ALL_ITEMS);
});
 





});