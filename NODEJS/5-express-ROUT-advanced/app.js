const express = require("express") ; //1
const app = express(); //1.2
const homeRouter = require('./routs/homeRouter'); //!2  homeRouter.js
const productRouter = require('./routs/productRouter'); //!3  productRouter.js



//-----------------http://localhost:3000/---------- /  -----------    
app.get('/', (req, res) => {  
    res.send("hello");
});

//-------------http://localhost:3000/home-------- /home ------------
app.use('/home',homeRouter) ; //!2.1   

//-------------http://localhost:3000/product-------- /product ------------
app.use('/product',productRouter); //!3.1   




app.listen(3000, () => {
    console.log('App listening on port 3000!');
});