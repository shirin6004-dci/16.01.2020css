const express = require('express')
const app = express()
const path = require('path')
const dataModules = require('./datamodules/mongooseData')
//ZVw9zZhQfss2pbbY
app.get('/', (req, res) => {
    res.render('register')
});


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');  
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: false }));
app.use(express.json())  //! check if req is a json will convert to obj  wenn({extended:false})




//client side validation 
// all inputs are filled 
// password match repassword
// user muss check the term of servises checkbox
// if any of this roles is not valid , boostrap modal should be shown error msg

app.post('/register', (req, res) => {
    console.log(req.body);
    
  
      const fname = req.body.fname
      const password = req.body.password
      const email = req.body.email
  
    if ( fname && email && password) {
  
        dataModules.registerUser(fname, email, password).then(() => {
        res.json(1) //user register success
      }).catch(error => {
        console.log(error);
        if (error == "exist") {
          res.json(3)  // user exist
        } else {
          res.json(4) // server error
        }
      })
  
    } else {
      res.json(2) // user register not seccess
    } 
  });
  

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});