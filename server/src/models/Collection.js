const mongoose = require('mongoose');
const timeStamp = require('mongoose-timestamp');

const CollectionSchema = new mongoose.Schema({
    name:{type:String,require:true},
    UrlImage:{type:String,require:true},
    DirectLink:{type:String,require:true}
})

CollectionSchema.plugin(timeStamp);
const Collection = mongoose.model("Collection" , CollectionSchema);
module.exports = Collection;