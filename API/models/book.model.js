const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        min: 1,
        max: 100
    },
    description:{
        type:String,
        min:1,
        max:200
    },
    long_description:{
        type:String,
        min: 10,
        max: 10240
    },
    bookauthors:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"bookauthor"
    }],
    bookcomments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"bookcomment"
    }],
    purchaseitems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"purchaseitem"
    }],
    archivedpurchaseitems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"archivedpurchaseitem"
    }]
});
bookSchema.index();
module.exports = mongoose.model("book",bookSchema);