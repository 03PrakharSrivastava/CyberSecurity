const mongoose  = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    confirmPassword: String,
    email: String,
    phoneNumber: Number,
    userType: String
});

module.exports = mongoose.model('user',UserSchema);