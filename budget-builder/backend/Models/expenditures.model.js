const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenditureSchema = new Schema({
    expenditure : {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    amount:{type: Number, required: true, trim: true},
},{
    timestamps: true,
})


const Expenditure = mongoose.model('Expenditure',expenditureSchema);

module.exports = Expenditure; 