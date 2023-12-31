const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username : {
        type:String,
        required:true,
    },
    email :{
        type:String,
        required:true,
    },
    hashedPassword:{
        type:String,
        required:true,
    },
    imageURL:{
        type:String,
        required:true,
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;