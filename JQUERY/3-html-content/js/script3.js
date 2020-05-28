$(document).ready(function () {
    $('.collapse > h2 > span').click(function (e) { 
        e.preventDefault();
        $('.collapse > div').slideUp(500)
       //! $(this).parent().next().slideToggle( )
        // change to mines if slideDown   >> change to + is slideUp
        let current = $(this).text()
          $('.collapse > h2 > span').text('+');

             //* if(){                                               } else{}
           current=='-' ? $(this).text('+').parent().next().slideUp() : $(this).text('-').parent().next().slideDown()
          // $(this).text()=='-' ? $(this).parent().next().slideDown() : $(this).parent().next().slideUp()
       
      

    });
});