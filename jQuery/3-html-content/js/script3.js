$(document).ready(function () {
    $('.collapse > h2 > span').click(function (e) { 
        e.preventDefault();
        $('.collapse > div').slideUp()
        $(this).parent().next().slideToggle(500 , function(){
          $('.collapse > h2 > span').toggleClass('close');
            
        });
      

    });
});