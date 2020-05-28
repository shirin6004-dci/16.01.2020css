$(document).ready(function () {

        $('.customer-logos').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          arrows: false,
          dots: false,
          pauseOnHover: false,
          responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 4
            }
          }, {
            breakpoint: 520,
            settings: {
              slidesToShow: 3
            }
          }]
        });
  
//---------------------------


/* 
<!-- 
$("selector").on("tap",function(event){...})
or 
    $('#container').bind('mousedown touchstart', function () {
  var $target = $(event.target);
  alert('Clicked on: '+$target.attr('id'));
});
 --> */

 //! change text btn in mobile phone wenn you tapped 
let btn = document.querySelector("#mybtn");
btn.addEventListener("touchstart" , (e)=>{
    console.log(e);
    
    btn.innerText = "change"
});


let body = document.querySelector('body');
let span = document.querySelector('#touchesCountSpan');
body.addEventListener('touchstart' , (e)=>{
    span.innerText = e.touches.length
})
});