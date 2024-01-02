const express = require('express')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')
const knex = require('knex')

const register = require('./controllers/register')
const signin = require('./controllers/signin')
const profile = require('./controllers/profile')
const image = require('./controllers/image')

const db = knex({
    client: 'pg',
    connection: {
      host : 'postgres://smartbrain_y29e_user:HYs7Egxcfcxq1RQrk6KRWnqBGStjD4J2@dpg-cm9gfavqd2ns73dq0d8g-a/smartbrain_y29e',
      port : 5432,
      user : 'smartbrain_y29e_user',
      password : 'HYs7Egxcfcxq1RQrk6KRWnqBGStjD4J2',
      database : 'smartbrain_y29e'
    }
});

const app = express()
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => { res.send('it is working!')})

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })

app.put('/image', (req, res) => { image.handleImage(req, res, db) })

app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })

app.listen(process.env.PORT || 3000, () => {
    console.log(`app runing at port ${process.env.PORT}`)
})