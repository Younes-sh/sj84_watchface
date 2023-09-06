const mongoose = require('mongoose');
const timeStamp = require('mongoose-timestamp');


const gifSchema = new mongoose.Schema({
    name:{type:String,require:true},
    gif:{type:String,require:true}
})

gifSchema.plugin(timeStamp);
const Gif = mongoose.model('Gif' , gifSchema);
module.exports = Gif;