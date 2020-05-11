/*  how jquery bild
function $(selector) { 
    return document.querySelector(selector)
 }
 $() */


 $(document).ready(function () {

//get parent
     $('#btn1').click(function (e) { 
         e.preventDefault();
         alert($('h2').parent().text()) 
     });

//get childeren
     $('#btn2').click(function (e) { 
        e.preventDefault();
        alert($('p').children().text()) 
    });

//get next element
$('#btn3').click(function (e) { 
    e.preventDefault();
    alert($('h2').next().text()) 
});

//get previuos element
$('#btn4').click(function (e) { 
    e.preventDefault();
    alert($('p').prev().text()) 
});


//get all parentsUntil ('element')
$('#btn5').click(function (e) { 
    e.preventDefault();
    console.log($('span').parents()[1]);
    
});







 });