const mongoose = require('mongoose');
const timeStamp = require('mongoose-timestamp');

const BackGroundGallery = new mongoose.Schema({
    title:{type:String,require:true},
    UrlImage:{type:String,require:true}
})

BackGroundGallery.plugin(timeStamp);
const GalleryImage = mongoose.model("GalleryImage", BackGroundGallery);
module.exports = GalleryImage