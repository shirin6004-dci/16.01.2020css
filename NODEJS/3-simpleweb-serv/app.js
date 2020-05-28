const http = require('http');  
const fs   = require('fs');
const url = require('url'); // get data (FORM) whith help url

//import our module
const saver = require('./modules/saver')

http.createServer((req , res)=>{
    let q = url.parse(req.url , true)
    console.log(req.url);

    switch (q.pathname) {
        case '/home':    
                res.writeHead(200,{'content-Type' : 'text/html'})      //?TYPE OF CONTENT
                let text1 = fs.readFileSync('views/index.html')
                res.end(text1)  //? REPLACE           
            break;
            case '/homeContact': 
             //saver.saveContent('hi' , "content.txt") 
          if (q.query.fname) {
                console.log(q.query);                
                let name = q.query.fname + '\n' +q.query.lname + '\n' + q.query.msg               
              saver.saveContent( name , "content.txt")             
          }           
            let sharedtext = fs.readFileSync('views/contact.html') //? READFILE
           res.writeHead(200,{'content-Type' : 'text/html'})      //?TYPE OF CONTENT
           let text = fs.readFileSync('views/setcontact.html')
           res.end(text.toString().replace('this is a shared content' ,sharedtext ))  //? REPLACE           
       break;
     
            case '/img':                       
                res.writeHead(200,{'content-Type' : 'image/jpg'})     
                let img =fs.readFileSync('views/img/hero.jpg')               
                res.end(img)  
            break;     
            case '/imglogo':                       
                res.writeHead(200,{'content-Type' : 'image/png'})  
                let imgLogo = fs.readFileSync('views/img/Logo.png')                  
                res.end(imgLogo)  
            break;     
            case '/Css':
                res.writeHead(200,{'content-Type' : 'text/css'})
                let style = fs.readFileSync('views/css/index.css')
                res.end(style)
            break;  
        default:
            res.writeHead(404,{'content-Type' : 'text/html'})
            res.end('<h2>404 page is not found</h2>')
            break;
    }


}).listen(4500)

console.log('server is running');
