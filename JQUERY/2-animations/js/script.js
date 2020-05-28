$(document).ready(function () {
   

//*$(selector).animate(opject options , time , callback>(will run after finishing animation))
// $('#someDiv').animate({'left':'300px' , 'opacity' : '0.3' } , 2000 , function(){ alert('hi)})  

    $('#btn').click(function (e) { 
        e.preventDefault();
        $('#someDiv').animate({'left':'300px' , 'opacity' : '0.3' } , 2000 , function(){ alert('hi')})        
    });
//-------------------mousemove
    $('#someDiv').mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        $(this).stop()  //$('#someDiv').stop()
    });

//---------call back function-----------------
    let animRight = function(){
        $('.container>div').animate({'left':'0'},2000 , animLeft)
                                
    }   
   
    let animLeft = function(){
        $('.container>div').animate({'left':'350px'},2000 , animRight)
 
    }
    animRight()


      //---------CHAIN----as methode as you want------------         
      $('.chainDiv').animate({ 'height' : '200px' } , 1000).slideUp(2000).text('i am there').slideDown(1000).fadeOut(1000 ,function(){alert('hi')})
         
          
                       


});



