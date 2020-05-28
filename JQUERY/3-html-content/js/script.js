$(function () {
    $('#btn').click(function (e) { 
        e.preventDefault();
        let msg = $('#someDiv>p').text();
        alert(msg)
    });

    //btn2 
    $('#btn2').click(function (e) { 
        e.preventDefault();
        $('#someDiv >h2').text('CHANGE H2')
    });


    $('#btn3').click(function (e) { 
        e.preventDefault();
        let msg2 = $('#someDiv').html()
        alert(msg2)
    });


    $('#btn4').click(function (e) { 
        e.preventDefault();
     $('#someDiv>p').html('<h1> i am change </h1>');
    });


    $('#btn5').click(function (e) { 
        e.preventDefault();
       let valueGet =  $('#someDiv > input').val();
       alert(valueGet)
    });


    $('#btn6').click(function (e) { 
        e.preventDefault();
        $('#someDiv > input').val('set value');
     
    });


    $('#btn7').click(function (e) { 
        e.preventDefault();
        $('#someDiv > p').append('<h3>i am append</h3>');
     
    });


    $('#btn8').click(function (e) { 
        e.preventDefault();
        $('#someDiv > input').after('<h4>i am after input</h4>');
     
    });

    $('#btn9').click(function (e) { 
        e.preventDefault();
        $('#someDiv > input').before('<h4>i am before input</h4>');
     
    });

    $('#btn10').click(function (e) { 
        e.preventDefault();
        $('#someDiv > p').remove();
     
    });


// delet all things inside element
    $('#btn11').click(function (e) { 
        e.preventDefault();
        $('#someDiv >p').empty();
     
    });

});