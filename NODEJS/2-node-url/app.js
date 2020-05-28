const http = require('http');  
const fs   = require('fs');
const url = require('url'); // get data (FORM) whith help url


http.createServer((req , res)=>{
    console.log(req.url);
let urlObj = url.parse(req.url , true) // convert to obj and see data
//console.log(urlObj);


    switch (urlObj.pathname) {
        case '/home':
            //get shared content
                let sharedtext = fs.readFileSync('views/shared.html')
                res.writeHead(200,{'content-Type' : 'text/html'})                   
                let text = fs.readFileSync('views/index.html')
                res.end(text.toString().replace('this is a shared content' ,sharedtext ))  //! replace it will return (buffer) than we need to make (toString())
            break;
            case '/about':
                let sharedtext1 = fs.readFileSync('views/shared.html')
                res.writeHead(200,{'content-Type' : 'text/html'})
               let text1= fs.readFileSync('views/about.html')     
               res.end(text1.toString().replace('this is a shared content' ,sharedtext1 )) //! replace
             
            break;
            case '/contact':
                if (urlObj.query.fname) {
                    console.log(urlObj.query);
                    
                      console.log(urlObj.query.fname); //! get data from urlObj than we need to check (if is there )               
                }
                let sharedtext2 = fs.readFileSync('views/shared.html')
                res.writeHead(200,{'content-Type' : 'text/html'})
               let text2= fs.readFileSync('views/contact.html')     
               res.end(text2.toString().replace('this is a shared content' ,sharedtext2 )) //! replace
             
            break;
            case '/someCss':
                res.writeHead(200,{'content-Type' : 'text/css'})
                res.end('body{background-color:red;}')
            break;
            case '/someJson':
                res.writeHead(200,{'content-Type' : 'application/json'})
                res.end('{"name" : "shirin" , "lastname" : "valizadeh"}')
            break;
        default:
            res.writeHead(404,{'content-Type' : 'text/html'})
            res.end('<h2>404 page is not found</h2>')
            break;
    }


}).listen(4500)

console.log('server is running');
