const mongoose = require("mongoose");
const {Schema} = mongoose

const photoScrema = new Schema({
    image: String,
    title: String,
    likes: String,
    comments: Array, 
    userId: mongoose.ObjectId,
    userName: String,

},{
    timestamps: true
})

const Photo = mongoose.model("Photo", photoScrema);

module.exports = Photo;