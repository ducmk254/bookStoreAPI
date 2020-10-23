const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
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
    bookcomments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"bookcomment"
    }],
    archivedpurchases:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"archivedpurchase"
    }]
});
customerSchema.index();
module.exports = mongoose.model("customer",customerSchema);