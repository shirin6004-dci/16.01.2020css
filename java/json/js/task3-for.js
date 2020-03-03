//* =================== EXERSICE ==================

let xhr = new XMLHttpRequest()    //* 1
xhr.open('GET', '/data.json')           //* 2  
xhr.send()                                  //* 3 

xhr.onload = function () {                      //* 4 
    if (xhr.status == 200) {                        //* 5 

        let sh = JSON.parse(xhr.response).arrayOfProducts     //* 6
     
      
           for (let i = 0; i < sh.length; i++) {
               
           let shproduct = (i+1) +'  <img src= " ' + sh[i].imgUrl + '" height = 100px  >' + '<br>'
            shproduct += 'Name : ' + sh[i].name + '<br>'
            shproduct +='Price : ' + '<strike>' +'<font size="2" color = red>' +( sh[i].price+20) + '</font>' +'</strike> '+ sh[i].price +  '  <font size="1"><sup>Euro</sup> </font>' +  '<br>'
            
            document.write(shproduct)
           }
            document.close()                   //! muss write that will stop loading   
       

    } else {
        console.log('error number ist : ', xhr.status)
    }
}