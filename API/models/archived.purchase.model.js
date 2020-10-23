const mongoose = require("mongoose");

const archived_purchaseSchema = new mongoose.Schema({
    purchasestatus:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"purchasestatus"
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"customer"
    },
    archivepurchaseitems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"archivepurchaseitem"
    }],
    creat_time:{
        type:Date,
        required:true,
        default:Date.now
    },
    update_time:{
        type:Date
    },
    update_info:String
});

archived_purchaseSchema.index();
module.exports = mongoose.model("archivedpurchase",archived_purchaseSchema);