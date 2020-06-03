const express = require('express');
const app = express();

// set public files
app.use(express.static('./public'))


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
// render main file 
app.get('/', (req, res) => {
   res.render('main')
});




app.listen(3000, () => {
    console.log('App listening on port 3000!');
});