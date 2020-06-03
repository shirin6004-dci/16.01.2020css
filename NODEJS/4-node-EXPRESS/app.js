const express = require('express');  //!1.1
const app = express(); //! 1.2
//const bodyParser = require('body-parser') //!1.3

//set bodyParser middleware 
//app.use(bodyParser.urlencoded({extended:true})) //! 1.3.1
//or u can write express and u dont need to have bodyParser
app.use(express.urlencoded({extended:true})) //! 1.2.1



//rout  -------------------- / --------------------------root of the domain
app.get('/' , (req , res)=>{  //!4  
    res.sendFile(__dirname + "/home.html")   
});
app.post('/', (req, res) => {  //!4.1
    console.log(req.body);   //1.3  get all DATA that USER will SEND
    if (req.body.username === "user1" && req.body.pass === "1234") {
        res.send('login success');
    }else{
        res.send("faild");
    }

});





//rout ---------------- /about-------------------------
//rout  /about
app.get('/about' , (req , res)=>{  //!5  /about
    //res.send("hello ABOUT")
    res.send(__dirname);
});
//rout ----------------------/contact------------------------
app.get('/contact' , (req , res)=>{  //!6  /contact
    res.send("hello CONTACT")
});
//rout -------------------/test -------------------------
app.get('/test', (req, res) => {
    console.log(req);
    
    res.json('test')
});




app.listen(3000 , ()=>{  //!3
    console.log("server running ...");
    
});
