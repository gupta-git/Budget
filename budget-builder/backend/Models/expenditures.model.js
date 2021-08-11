const { Schema, models } = require("mongoose");

const expenditureSchema = new Schema({
    expenditure : {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    amount:{type: Int, required: true, trim: true},
},{
    timestamps: true,
})


const Expenditure = mongoose.model('Expenditure',expenditureSchema);

module.exports = Expenditure; 