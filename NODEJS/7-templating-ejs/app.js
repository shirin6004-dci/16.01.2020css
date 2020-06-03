const express = require('express')
const app = express()


//!1set view engin type
app.set('view engine', 'ejs');
//!2set the views folder 
app.set('views', __dirname + '/views');
// render main file 
app.get('/', (req, res) => {
    //res.render('main')  //!  <%= title %>
    //res.render('main' , {title:'i am in app'})          
    let arr = ['banana' , 'apple' , 'watermelone']
    res.render('main' , {title:'EJS title', fruits: arr} )
});




app.get('/contact', (req, res) => {
    //res.render('main')  //!  
    res.render('main' , {title:'contact Us' , fruits: []})  //        <%= title %>
});




app.listen(3000, () => {
    console.log('App listening on port 3000!');
});