$(document).ready(function () {

    $('#btn1').click(function (e) {
        e.preventDefault();
        console.log($('#ul1').children());


    });


// find()    such class inside element
    $('#ul1').find('li:not(.activ)').click(function (e) {
        e.preventDefault()
        //! click an li see alert  >>   $(this).text()
        alert('i am not activ' + $(this).text())
    });



    //filter()    wich element has class
    $('#ul2>li').filter('li:not(.activ)').click(function (e) {
        e.preventDefault()
        //! click an li see alert  >>   $(this).text()
        alert('i am not activ FILTER' + $(this).text())
    });



    $('#ul1').find('li:not(.activ)').each(function (indexInArray, element) { 
         console.log(indexInArray ,element);
         
    });


    //first()
    //last  $('li').last()                >>.return last li
    //eq()   $('li).eq(3)       >> return fourth li
    //not('.class')        >>no this one




});