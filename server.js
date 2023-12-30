const express = require('express')

const app = express()

app.use(express.json());

const database = {
    users: [
        {
            id: 123,
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: 124,
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send(database.users)
})

app.post('/signin', (req, res) => {
    if (req.body.email == database.user[0].email && req.body.password == database.user[0].password) {
        res.json('sucess')
    }else {
        res.status(400).json('error logging in')
    }
    res.json('signing')
})

app.post('/register', (req, res) => {
    const {email, name, password} = req.body
    database.users.push({
        id: 125,
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    })
    res.json(database.users[database.users.length-1])
})

app.listen(3000, () => {
    console.log('app runing')
})

/*

--> res = this is working
/signin --> POST(data hidden) = sucess or fail
/register --> POST(data hidden) = user
/profile/:userId --> GET = user
/image --> PUT (update) = user



*/