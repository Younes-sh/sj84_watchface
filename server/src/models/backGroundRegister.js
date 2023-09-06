const mongoose = require('mongoose');
const timeStamp = require('mongoose-timestamp');

const schemaGallery = new mongoose.Schema({
    title:{type:String, require:true},
    UrlImage:{type:String,require:true}
})

schemaGallery.plugin(timeStamp);
const RegisterImage = mongoose.model("RegisterImage" , schemaGallery);
module.exports = RegisterImage;