const mongoose = require("mongoose");

const purchasestatusSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    purchases:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"purchase"
    }],
    archivedpurchases:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"archivedpurchase"
    }]
});

purchasestatusSchema.index();
module.exports = mongoose.model("purchasestatus",purchasestatusSchema);