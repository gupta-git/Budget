const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bugetSchema = new Schema({
    budget : {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    amount:{type: Number, required: true, trim: true},
},{
    timestamps: true,
})


const Budget = mongoose.model('Budget',bugetSchema);

module.exports = Budget; 