$(document).ready(function () {
    

   // $('.list').sortable();
   $('.list').sortable({
 
       axis: 'y' ,  //!allow moving** axis  y or x
       cancel: ".unsotable",     //!cann not move
       handle: "span" , //! just moving wenn you click an move icon wich is inside span
       stop:function(event , ui) {   //drop and stop 
          // console.log(ui);
         if(checkOrder()) {
             alert('done')
         }
       }

   });


   //check order
   function checkOrder() {
       let check = true
       $('.list>li>h2').each((index, item)=> { 
            console.log($(item).text());
            if ((index + 1)+'' != $(item).text() ) {    //if number sind == insexOf 
                check = false
            }
       });
       return check
   }

});