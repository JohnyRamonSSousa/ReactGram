const mongoose = require("mongoose");
const {Schema} = mongoose;

const photoSchema = new Schema({
    image: String,
    title: String,
    likes: String,
    comments: Array, 
    userId: mongoose.objectId,
    userName: String
},{
    timeseries: true
})

const Photo = mongoose.model("photo", photoSchema);

module.exports = Photo;