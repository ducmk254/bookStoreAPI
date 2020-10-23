const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        min: 1,
        max: 100
    },
    lastname:{
        type:String,
        required:true,
        min:1,
        max:100
    },
    street:String,
    city: String,
    bookauthors:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"bookauthor"
    }]

});
authorSchema.index();
module.exports = mongoose.model("author",authorSchema);