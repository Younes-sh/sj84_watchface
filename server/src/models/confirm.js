const mongoose = require('mongoose');
const timeStamp = require('mongoose-timestamp');



const confirmSchema = new mongoose.Schema({
    email:{type:String},
    name:{type:String,require:true},
    comment:{type:String,require:true},
    replyComment:{type:String,require:true}
})
confirmSchema.plugin(timeStamp);
const Confirm = mongoose.model("Confirm",confirmSchema);
module.exports = Confirm;