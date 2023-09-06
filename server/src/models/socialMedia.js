const mongoose = require('mongoose');
const timeStamp = require('mongoose-timestamp');

const socialSchema = new mongoose.Schema({
    name:{type:String,require:true},
    UrlImage:{type:String,require:true},
    LinkDirection:{type:String,require:true}
})

socialSchema.plugin(timeStamp);
const SocialMedia = mongoose.model("SocialMedia", socialSchema);


module.exports = SocialMedia;