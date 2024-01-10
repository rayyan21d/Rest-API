const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    memberId: {
        type: String,
        required: true
    },

    score: {
        type: Number
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

})


module.exports = mongoose.model('User', userSchema)