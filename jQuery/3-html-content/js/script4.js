$(document).ready(function () {
    $('#btn1').click(function (e) { 
        e.preventDefault();
        alert($('.someDiv').width() + ' & ' + $('.someDiv').height() )  // just with
    });


    $('#btn1').click(function (e) { 
        e.preventDefault();
        alert($('.someDiv').innerwidth() + ' & ' + $('.someDiv').innerheight() )  //with + padding
    });



});