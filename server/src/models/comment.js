const mongoose = require('mongoose');
const timeStamp = require('mongoose-timestamp');

const commentSchema = new mongoose.Schema({
    email:{type:String},
    name:{type:String,require:true},
    comment:{type:String,require:true},
    replyComment:{type:String,require:true}
})
commentSchema.plugin(timeStamp);
const Comment = mongoose.model("Comment",commentSchema);
module.exports = Comment;