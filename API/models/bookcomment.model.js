const mongoose = require("mongoose");

const bookcommentSchema = new mongoose.Schema({
        comment:{
            type:String,
            required:true
        },
        send_time:{
            type:Date,
            default:Date.now,
            required:true
        },
        books:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"book"
        },
        customer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"customer"
        },
        book_rating:{
            type:Number,
            enum:[1,2,3,4,5]
        }
});
bookcommentSchema.index();
module.exports = mongoose.model("bookcomment",bookcommentSchema);