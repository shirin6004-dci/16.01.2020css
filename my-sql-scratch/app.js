const express = require('express')
const app = express()
const mysql = require('mysql')


app.get('/', (req, res) => {
    res.send('sql');
});

//connect 
let con = null
function connect() {
    return new Promise((resolve , reject)=> {
        if (con) {
        if (con.state === 'disconnected') {
            con.connect(err=>{
                if (err) {
                    reject(err)
                }else{
                    resolve()
                }
            })
        }else{
            resolve()
        }
    }else{
        con = mysql.createConnection({
            host:'localhost',
            port: 3306,
            user: 'root',
            password: '123456',
            database : 'fbw5_test'
        })
        con.connect(err=>{
            if (err) {
                reject(err)
            }else{
                resolve(err)
            }
        })
    }
    })  
}


app.get('/connect', (req, res) => {
 
    connect().then(()=>{
        res.send('connected with function');
    }).catch(err=>{
        res.send(err.message);
    })
});


app.get('/insert', (req, res) => {
    connect().then(() => {
        con.query("INSERT INTO users (email, password) VALUES ('aaa1@sss.ff', '12345123547')", (error, result, fields) => {
            console.log(error);
            console.log(result);
            console.log(fields);
            if(error) {
                res.send(error.message);
            } else {
                res.json(result);
            }
        })
    }).catch(error => {
        res.send(error.message);
    })
});

app.get('/select', (req, res) => {
    connect().then(() => {
        con.query('SELECT * FROM users', (error, result, fields) => {
            console.log(error);
            console.log(result);
            console.log(fields);
            if (error) {
                res.send(error.message);
            } else {
                res.json(result);
            }
        })
    }).catch(error => {
        res.send(error.message);
    })
});


app.get('/delete', (req, res) => {
    connect().then(() => {
        con.query('DELETE FROM users WHERE id = 1', (error, result, fields) => {
            console.log(error);
            console.log(result);
            console.log(fields);
            if (error) {
                res.send(error.message);
            } else {
                res.json(result)
            }
        })
    }).catch(error => {
        res.send(error.message)
    })
});


app.get('/update', (req, res) => {
    connect().then(()=>{
        con.query("UPDATE users SET email = 'shirin@yahoo.com' WHERE  id = 1 " , (error , result , fields)=>{
            if (error) {
                res.send(error.message);
            }else{
                res.json(result)
            }
        })
    }).catch(err=>{
        res.send(err.message);
    })
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});