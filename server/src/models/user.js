const mongoose = require('mongoose');
const timeStamp = require('mongoose-timestamp');


const userSchema = new mongoose.Schema({
    email:{type:String,require:true,unique:'true'},
    first_name:{type:String,require:true},
    last_name:{type:String,require:true},
    username:{type:String,require:true},
    password:{type:String,require:true},
})

userSchema.plugin(timeStamp);

const User = mongoose.model("User" , userSchema);

module.exports = User;