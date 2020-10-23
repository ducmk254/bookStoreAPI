const mongoose = require("mongoose");

const purchaseitemSchema = new mongoose.Schema({
    books:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book"
    },
    purchase:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"purchase"
    },
    quantity:{
        type:String,
        required:true,
        min:1,
        max:10000
    }
});

purchaseitemSchema.index();
module.exports = mongoose.model("purchaseitem",purchaseitemSchema);