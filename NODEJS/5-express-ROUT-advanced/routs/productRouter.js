const express = require("express") ; //1
const productRouter = express.Router(); //2


productRouter.get('/' , (req,res)=>{
    res.send('welcome product');
})


productRouter.get('/prd1' , (req,res)=>{
    res.send('welcome prd1');
});
productRouter.get('/prd1/subpr1' , (req,res)=>{
    res.send('welcome subPr1');
});

productRouter.get('/prd2' , (req,res)=>{
    res.send('welcome prd2');
});


module.exports = productRouter;