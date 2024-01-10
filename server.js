require('dotenv').config()

const PORT = 3000;
const express = require('express');
const app = express();

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on('error', (error) => { console.log("Connected to Database") })
db.once('open', () => { console.log("Server Started") })


app.use(express.json())


const usersRouter = require('./routes/users')
app.use('/users', usersRouter)




app.listen(PORT, () => {
    console.log("Server is running on port $`{PORT}` ")
})