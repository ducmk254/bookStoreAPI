const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    customer:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"customer"
    }],
    create_time:{
        type:Date,
        default: Date.now
    },
    update_time:{
        type:Date
    },
    update_info: String,
    purchasestatus:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"purchasestatus"
    },
    purchaseitems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"purchaseitem"
    }]
});

purchaseSchema.index();
module.exports = mongoose.model("purchase",purchaseSchema);