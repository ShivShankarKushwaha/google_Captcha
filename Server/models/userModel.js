const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:String
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
