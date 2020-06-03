const express = require('express');
const app = express();

app.use(express.static('./public'))  //!show folders inside public


app.get('/', (req, res) => {
    res.send('hallo');
});

app.get('/home', (req, res) => {  //
    res.sendFile( __dirname + '/home.html'); //!add home.html
});




app.listen(3000, () => {
    console.log('App listening on port 3000!');
});