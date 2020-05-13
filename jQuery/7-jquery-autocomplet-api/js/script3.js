$(document).ready(function () {
    
    $('#input').datepicker() 
    $('#input').datepicker('option' , 'showAnim' , 'show')


//show data in alert
    $('#dataBtn').click(function (e) { 
        e.preventDefault();
        alert($("#input").val())
    });
});