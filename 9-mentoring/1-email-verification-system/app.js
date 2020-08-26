const express = require('express')
const app = express()
const path = require('path')
const dataModules = require('./modules/mongooseDataModul')

const port = process.env.PORT || 3000

app.set('view engine', 'ejs');
//app.set('views', __dirname + '/views');  or
app.set('views',path.join(__dirname , 'views'))


app.use(express.urlencoded({ extended: false }));
app.use(express.json())  //! check if req is a json will convert to obj  wenn({extended:false})






app.get('/', (req, res) => {
    res.send('hallo world')
});
app.get('/register', (req, res) => {
    res.render('register')
});





app.post('/register', (req, res) => {
    console.log(req.body);
    const lname = req.body.lname.trim()
  const fname = req.body.fname.trim()
    const password = req.body.password
    const email = req.body.email.trim()
    
  
    if (lname && fname && email && password) {
  
        dataModules.registerUser(fname , lname , email, password).then(() => {
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
  

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});