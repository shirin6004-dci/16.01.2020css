const express = require("express") ; //1
const homeRouter = express.Router(); //2


// ---==========-/ ===============---------
//homeRouter.route('/').get((req , res)=>{res.send('welcome home');});
    //!or
homeRouter.get('/' , (req,res)=>{
    res.send('welcome home');
})





//------=============== /subhome-==============--
//homeRouter.route('/subhome').get((req,res)=>{ res.send('welcome subHome');});
 //!or
homeRouter.get('/subhome' , (req,res)=>{
    res.send('welcome subhome');
})



module.exports = homeRouter;