const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bugetSchema = new Schema({
    budget : {type: String, trim: true},
    description: {type: String, trim: true},
    amount:{type: Number,  trim: true},
},{
    timestamps: true,
})


const Budget = mongoose.model('Budget',bugetSchema);

module.exports = Budget; 