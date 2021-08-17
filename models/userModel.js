const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://img.icons8.com/ios-glyphs/30/000000/user--v1.png'
        
    },
    role: {type: String, default: 'user'},
    gender: {type: String, default: ''},
    mobile: {type: String, default: ''},
    address: {type: String, default: 'user'},
    story: {type: String, default: '', maxLength: 200},
    website: {type: String, default: ''},
    followers: [{
        type: mongoose.Types.ObjectId, 
        ref: 'user'
    }],
    following: [{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }],
    saved:[{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }]

}, {
    timestamp: true
})
module.exports = mongoose.model('user',userSchema)