const mongoose = require("mongoose");

const archived_purchase_item_Schema = new mongoose.Schema({
    archivedpurchase:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"archivedpurchase"
    },
    books:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book"
    }],
    quantity:{
        type:String,
        required:true
    }
});

archived_purchase_item_Schema.index();
module.exports = mongoose.model("archivedpurchaseitem",archived_purchase_item_Schema);