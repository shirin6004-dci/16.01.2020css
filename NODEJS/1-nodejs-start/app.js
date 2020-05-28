const http = require("http");
const fs = require("fs");





//req get from user  >>  resp send to user
http.createServer((req,resp , next) => {       

   // resp.writeHead(200 , {'content-type' : 'application/json'})//first send head    >//?text/plain  or application/json  or  text/html  
//send json 
    let obj = {
       name : "shirin",
       lastname : "valizadeh"   
    }
 //  resp.end(JSON.stringify(obj))    // {'content-type' : 'application/json'}

 


 resp.writeHead(200 , {'content-type' : 'text/html'})
 // resp.end('<h1>hallo world </h1>') //second  content  >>//? send data to the client(user)
// send html text  >> let myHtml = `<html> <head> <title>my first server </title> </head><body><h1>hallo 1 world </h1> </body> </html>`
   // resp.end(myHtml)


   //!-------------------reading file  ---------------------
//* ****read file with   readFile  ***********1**or********
/*    fs.readFile("views/index.html" , (err,data)=>{
      if (err) {
         console.log(err);         
      }
          resp.end(data)
   })
 */


//* ****read file with   readFileSync  **********2*****or******
if (req.url == "/1") {
   resp.writeHead(200 , {'content-type' : 'text/html'})
   let text = fs.readFileSync("views/index.html")
resp.end(text)
}else if (req.url == "/2") {
   resp.writeHead(200 , {'content-type' : 'text/html'})
   let text = fs.readFileSync("views/index1.html")
   resp.end(text)
}else if(req.url == "/style.css"){     //? read css
   resp.writeHead(200 , {'content-type' : 'text/css'})
   let text = fs.readFileSync("views/style.css")
   resp.end(text)
   
}
else{
   resp.writeHead(200 , {'content-type' : 'text/html'})
   resp.end("error")
}




//console.log(req.url);



}).listen(4000);

console.log('port is running an 4000');
