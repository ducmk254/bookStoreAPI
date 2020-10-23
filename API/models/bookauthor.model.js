const mongoose = require("mongoose");
const bookauthorSchema = new mongoose.Schema({
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book"
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"author"
    }
});
bookauthorSchema.index(); 
module.exports = mongoose.model("bookauthor",bookauthorSchema);