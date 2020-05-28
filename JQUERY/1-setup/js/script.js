
 //  or $(function () {})    or $(document).ready(function(){})

$(document).ready(function(){


    $('#btn1').click(function(e){
         $('.someDiv').toggle(500)  // set time for effect
         if ($(this).text()== 'hide') { //btn.innerText change
             $(this).text('show')  //set text 
         }else{
            $(this).text('hide')
         }
    })
   


})




    
