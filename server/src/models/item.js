const mongoose = require('mongoose');
const timeStamp = require('mongoose-timestamp');


const itemSchema = new mongoose.Schema({
    name:{type:String,require:true},
    description:{type:String},
    image:{type:String,require:true},
    category:{type:String,require:true},
    Embed:{type:String,require:true},
    DirectLink:{type:String,require:true}
})

itemSchema.plugin(timeStamp);
const Item = mongoose.model("Item",itemSchema);

module.exports = Item; 