const express = require('express')
const app = express()
// or const MongoClient = require('mongodb').MongoClient     
const { MongoClient , ObjectID} = require('mongodb')    //or
const connectionString = 'mongodb+srv://fbw5:123456abc@cluster0.hjd09.mongodb.net/test1?retryWrites=true&w=majority'
const passwordHash = require('password-hash')

//to write ejs we chould write this 2 lines:
//set view engin type
app.set('view engine', 'ejs');
//set the views folder
app.set('views', __dirname + '/views');

app.use(express.urlencoded({
extended: false
})); //we dont need to get the data fron the url(we need to post data and file with post)
app.use(express.json()) 



app.get('/', (req, res) => {
    res.send('welcome to mongodb');
});


let mongoClient
app.get('/connect', (req, res) => {
    //open connection to mongo db
    MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }).then(client => {
        mongoClient = client

        console.log(client);// what is inside client
        res.send('connected');

    }).catch(error => {
        console.log(error);
        res.send('could not connect');
    })
});





//close connection to mongodb
app.get('/close', (req, res) => {
    mongoClient.close()
    res.send('close');
});


//1 or use then().catch()
app.get('/adduser', (req, res) => {
    //connect nodejs to mongodb server  or cluster
    MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }).then(client => {
        const db = client.db('test1')   // got database
        //insert data inside a collection
        db.collection('users').insertOne({
            title: 'some book',
            category: 'java'
        }).then(response => {
            console.log(response);
            res.send(response);
            client.close()   //!  wenn you open connection than you muss close it 

        }).catch(error => {
            console.log(error);
            res.send(error);
            client.close()   //!

        })
    }).catch(error => {
        res.send('cann not connect');
    })
});



//1 or use syncwait 
app.get('/addUserAsync', (req, res) => {
    //( async()=>{ write code})()    ( iffi)
    (async () => {
        try {
            let client = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
            const db = client.db('test1')
            const response = await db.collection('users').insertOne({
                email: 'blabla@hg',
                password: '12345'
            })
            client.close()
            res.send(response);
        } catch (error) {
            res.send(error);
        }

    })()
});


//
app.get('/insertmany', (req, res) => {
    (async () => {
        try {
            let client = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
            const db = client.db('test1')
            const response = await db.collection('users').insertMany([
                {
                email: 'blabla1@hg',
                password: '12345'
            },
            {
                email: 'blabla2@hg',
                password: '12395'
            },
            {
                email: 'blabla3@hg',
                password: '123'
            },
            
            ])
            client.close()
            res.send(response);
        } catch (error) {
            res.send(error);
        }

    })()
});

app.get('/getUsers', (req, res) => {
    (async () => {
        try {
            let client = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
            const db = client.db('test1')                                    
            const response = await db.collection('users').find({}).toArray()   // to get all  data as a Arry
            client.close()
            res.send(response);
        } catch (error) {
            res.send(error);
        }

    })()
});

app.get('/findone', (req, res) => {
    (async()=>{
        try {
           const client = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = client.db('test1')
       // const response = await db.collection('users').findOne({email:"blabla@hg"})
       const response = await db.collection('users').findOne({_id: new ObjectID('5efc4e9961c2d9250154995b')})
        client.close()
        res.send(response);
        } catch (error) {
            res.send(error);
        }

    })()
});


app.get('/updatemany', (req, res) => {
    (async()=>{
        try {
           const client = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = client.db('test1')
       // const response = await db.collection('users').findOne({email:"blabla@hg"})
       const response = await db.collection('users').updateMany({password:'12345'},{$set:{email:'asd@asd.asd'}})
        client.close()
        res.send(response);
        } catch (error) {
            res.send(error);
        }

    })()
});



app.get('/updateone', (req, res) => {
    (async()=>{
        try {
           const client = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = client.db('test1')
       // const response = await db.collection('users').findOne({email:"blabla@hg"})
       const response = await db.collection('users').updateOne({_id: new ObjectID('5efc4e9961c2d9250154995b')},{$set:{email:'new@.asd'}})
        client.close()
        res.send(response);
        } catch (error) {
            res.send(error);
        }

    })()
});



app.get('/deletmany', (req, res) => {
    (async()=>{
        try {
           const client = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = client.db('test1')
       // const response = await db.collection('users').findOne({email:"blabla@hg"})
       const response = await db.collection('users').deleteMany({password:'12345'})
        client.close()
        res.send(response);
        } catch (error) {
            res.send(error);
        }

    })()
});



app.get('/deletone', (req, res) => {
    (async()=>{
        try {
           const client = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = client.db('test1')
       // const response = await db.collection('users').findOne({email:"blabla@hg"})
       const response = await db.collection('users').deleteOne({password:'12395'})
        client.close()
        res.send(response);
        } catch (error) {
            res.send(error);
        }

    })()
});

app.get('/register', (req, res) => {
   res.render('register') 
});


//collection.save({_id:"abc", user:"David"},{w:1}, callback)

app.post('/register', (req, res) => {
    console.log(req.body);
     const email = req.body.email
     const password = passwordHash.generate(req.body.password)
    (async()=>{
        try {
        const client = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = client.db('test1')
       // const response = await db.collection('users').findOne({email:"blabla@hg"})
       const response = await db.collection('users').insertOne({
           email : email,
           password: password
       })
        client.close()
        res.send(response);
        } catch (error) {
            res.send(error);
        }

    })()
});



app.listen(3000, () => {
    console.log('App listening on port 3000!');
});