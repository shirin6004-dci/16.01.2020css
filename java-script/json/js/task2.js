let xhr = new XMLHttpRequest()    //* 1 step
xhr.open('GET', '/data.json')     //* 2 step 
xhr.send()                         //* 3 step 

xhr.onload = function () {          //* 4 step
    if (xhr.status == 200) {        //* 5 step check status

        let sh = JSON.parse(xhr.response).arrayOfProducts     //* 6step  convert to opject
      //  console.log(sh.arrayOfProducts[0].price)  or that is bether way
       // console.log(sh[2].price)
        sh.forEach(element => {
            document.write('<img src= " ' + element.imgUrl + '" height = 100px  >' + '<br>')
            document.write('Name : ' + element.name + '<br>')
            document.write('Price : ' + '<strike>' +'<font size="2" color = red>' +( element.price+20) + '</font>' +'</strike> '+ element.price +  '  <font size="1"><sup>Euro</sup> </font>' +  '<br>')
        });

    } else {
        console.log('error number ist : ', xhr.status)
    }
}