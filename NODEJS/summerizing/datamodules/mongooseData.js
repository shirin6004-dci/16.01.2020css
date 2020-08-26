const passwordHash = require('password-hash')
//const { MongoClient, ObjectID } = require('mongodb')
const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://test3:hRM151NgSuN8AKdv@cluster0.hjd09.mongodb.net/test3?retryWrites=true&w=majority'





//!3 get schema object
const { Schema } = mongoose
//!4 creat user schema
const userSchema = new Schema({
    fname: {
        type: String,
        required: true,
        max:50,
        min:2
    },

    email: {
        type: String,
        unique: true,
        required: true,
        max:100,
        min:5
    },
    password: {
        type: String,
        required: true,
        max:100,
        min:2
    }
    
})
//!5 get users modal
const Users = mongoose.model('users', userSchema)



// connect mongoose
function connect() {
    //check connection
    return new Promise((resolve, reject) => {
        if (mongoose.connection.readyState === 1) {
            resolve()
        } else {
            mongoose.connect(connectionString, {
                useUnifiedTopology: true,
                useCreateIndex: true,
                useNewUrlParser: true
            }).then(() => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        }
    })
}



//! registerUser mongoose
function registerUser(fname, email, password ) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            //creat new user      //37 line
            const newUser = new Users({
                fname:fname,
                email: email,
                password: passwordHash.generate(password),
       
            })
            //  save newuser in DB
            newUser.save().then(response => {
                // console.log(response);
                resolve()
            }).catch(error => {
                if (error.code === 11000) {
                    reject('exist')
                } else {
                    reject(error)
                }
            })
        }).catch(error => {
            reject(error)
        })
    })
}


module.exports ={registerUser}