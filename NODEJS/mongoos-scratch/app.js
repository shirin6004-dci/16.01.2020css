const express = require('express')
const mongoose = require('mongoose')
const connectionString ='mongodb+srv://shirin_user:h8AZAJuM6wsAQ8uw@cluster0.hjd09.mongodb.net/shirin?retryWrites=true&w=majority'
//Po7rBC7Tw6CSQxfl
const app = express()


//1 get schema object from mongoose
//? or  const schema = mongoose.Schema
const {Schema} = mongoose
//!CREAT users Schema
const usersSchems = new Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    active:{
        type:Boolean,
        required:true
    }
})

//! 2
const Users = mongoose.model('users' , usersSchems )


app.get('/', (req, res) => {
    res.send('welcome');
});

app.get('/connect', (req, res) => {
  //!check if mongoose is already connected to db
 if (mongoose.connection.readyState === 1) {
      res.send('already connected');
  }else{
      mongoose.connect(connectionString , {
          useCreateIndex: true,
          useNewUrlParser:true
      }).then(()=>{
          res.send('it is connected');
      }).catch(error =>{
          res.send(error);
      })
  } 
  //connect()
});

//* readyState: 0=disconnected / 1=connected / 2=connecting / 3=disconnecting
//3 connect 
function connect() {
    //check connection
    return new Promise((resolve , reject )=>{
           if (mongoose.connection.readyState === 1) {
        resolve()
    }else{
        mongoose.connect(connectionString , {
            //useUnifiedTopology:true,
            useCreateIndex: true,
            useNewUrlParser:true
        }).then(()=>{
            resolve()
        }).catch(error =>{
            reject(error)
        })
    }
    })
 
}

//4 insert
app.get('/adduser', (req, res) => {
    connect().then(()=>{
        //creat new user      //37 line
        const newUser = new Users({
            fname: 'shirin',
            lname: ' valizadeh',
            email: 'shirin@yahoo.com',
            age: 18,
            active: true
        })
        //5  save
        newUser.save().then(result =>{
            res.json(result)
        }).catch(error =>{
            res.send(error.message);
        })
    }).catch(error =>{
        res.send(error.message);
    })
});


app.get('/updateuser', (req, res) => {
    connect().then(()=>{
        Users.updateOne({_id: '5f0c47c067647d3e34a1a8ca'} , {
            age: 30,
            //increase the version number in db  to show howmany times this document has been updated
            $inc:{ __v:1}
        }).then(result=>{
            res.json(result)
        }).catch(error=>{
            res.send(error.message);
        })
    }).catch(error =>{
        res.send(error.message);
    })
});


app.get('/updateuser2', (req, res) => {
    connect().then(()=>{
        Users.updateMany({lname:' valizadeh'} , {
          fname:'frau shirin',
          $inc:{__v:1}
        }).then(result=>{
            res.json(result)
        }).catch(error=>{
            res.send(error.message);
        })
    }).catch(error =>{
        res.send(error.message);
    })
});


app.get('/getuser', (req, res) => {
    connect().then(()=>{
        Users.findOne({email:'shirin@yahoo.com'}).then(result=>{
            res.json(result)
        }).catch(error =>{
            res.send(error.message);
        })
    }).catch(error=>{
        res.send(error.message);
    })
});

app.get('/getuser2', (req, res) => {
    connect().then(()=>{
        Users.find().then(result=>{
            res.json(result)
        }).catch(error =>{
            res.send(error.message);
        })
    }).catch(error=>{
        res.send(error.message);
    })
});


app.get('/deletuser', (req, res) => {
    connect().then(()=>{
        Users.deleteOne({email:'shirin@yahoo.com'}).then(result=>{
            res.json(result)
        }).catch(error =>{
            res.send(error.message);
        })
    }).catch(error=>{
        res.send(error.message);
    })
});





app.listen(3000, () => {
    console.log('App listening on port 3000!');
});