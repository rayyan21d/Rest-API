const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Getting all
router.get('/', async (req, res) => {

    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }


})

// Getting one
router.get('/:id', (req, res) => {

})

// Creating one
router.post('/', async (req, res) => {

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        memberId: req.body.memberId

    })

    try {

        const newUser = await user.save()
        res.status(201).json(newUser)

    } catch (err) {

        res.status(400).json({ message: err.message })

    }

})

// Updating one using path not put just one info has 
router.patch('/:id', (req, res) => {

})

// Deleting one
router.delete('/:id', (req, res) => {

})


module.exports = router