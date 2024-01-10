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
router.get('/:id', getUser, (req, res) => {
    res.send(res.user.name)

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
router.patch('/:id', getUser, (req, res) => {
    res.json(res.user)

})

// Deleting one
router.delete('/:id', getUser, (req, res) => {
    try {
        await res.user.remove();
        res.json({ message: 'Deleted user' })

    } catch (err) {
        res.status(500).json({ messege:})
    }

})



async function getUser(req, res, next) {
    let user;
    try {

        user = await User.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({ message: "Cannot find user" })
        }

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.user = user;
    next()

}












module.exports = router
