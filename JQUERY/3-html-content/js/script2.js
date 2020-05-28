$(function () {
    // $('#div1').addClass('redDiv')
    $('#btn1').click(function (e) {
        e.preventDefault();
        $('#div1').addClass('redDiv')
    });


    //  $('#div1').removeClass('redDiv')
    $('#btn2').click(function (e) {
        e.preventDefault();
        $('#div1').removeClass('redDiv')
    });


    //   $('#div1').toggleClass('redDiv')
    $('#btn3').click(function (e) {
        e.preventDefault();
        $('#div1').toggleClass('redDiv')
    });

    //   $('#div1').hasClass('redDiv')      has this class or not > true or false
    $('#btn4').click(function (e) {
        e.preventDefault();
       console.log($('#div1').hasClass('redDiv'));
     
    });


    $('#btn5').click(function (e) {
        e.preventDefault();
       console.log($('#div1').css('width'));
     
    });

    $('#btn6').click(function (e) {
        e.preventDefault();
       console.log($('#div1').css('background-color' , 'gray'));
     
    });
});