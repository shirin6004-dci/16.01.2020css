/*for (let i = 0; i <=4; i++) {
   for (let x = 0; x <=4; x++) {
       if (x==0 || i==0 || i==4 || x==4 || x==i || x+i==4 ) {
           document.write("*")
       }else{
           document.write("-")
       }
       
   }
    document.write("<br>")
}
*/


for (let i = 0; i <= 4; i++) {
    for (let x = 0; x <=4; x++) {
      if ((x+i)>=4) {
          document.write("*")
      }else{
          document.write('&nbsp&nbsp')
      }
        
    }
    document.write("<br>")
}

