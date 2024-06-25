const mongoose = require('mongoose')
const { type } = require('os')

// Friend Model
const FriendSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
        },
    Email: {
        type: String,
        required: true
    },
})

const Friend = mongoose.model('Friend', FriendSchema)

module.exports = Friend