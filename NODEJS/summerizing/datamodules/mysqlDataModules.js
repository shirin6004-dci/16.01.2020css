const passwordHash = require('password-hash')
//const { MongoClient, ObjectID } = require('mongodb')
const mysql = require('mysql')
const fs = require('fs')


//!1 connect mysql
let con = null
function connect() {
    return new Promise((resolve, reject) => {
        if (con) {
            if (con.state === 'disconnected') {
                con.connect(err => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                })
            } else {
                resolve()
            }
        } else {
            con = mysql.createConnection({
                multipleStatements:true,
                host: 'localhost',
                port: 3306,
                user: 'root',
                password: '123456',
                database: 'fbw5_test'
            })
            con.connect(err => {
                if (err) {
                    reject(err)
                } else {
                    resolve(err)
                }
            })
        }
    })
}



function runQuery(queryString) {
    return new Promise ((resolve , reject)=>{
        connect().then(()=>{
            con.query(queryString , (err , result , fields)=>{
                if (err) {
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        }).catch(error =>{
            reject(error)
        })
    })
}
//! registerUser mysql
function registerUser(email, password) {
    return new Promise((resolve, reject) => {
        runQuery(`INSERT INTO users (email , password) VALUES ('${email}', '${passwordHash.generate(password)}')`).then(() => {
            resolve()
            
        }).catch(error => {
            if (error.errno === 1062) {
                reject('exist')
            } else {
                reject(error)
            }
        })
    })
}


module.exports = {registerUser}
