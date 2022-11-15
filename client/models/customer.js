const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
	CustomerName:{
		type: String,
		required: true,
		unique: true,
	},

})

export default mongoose.models['Customer'] || mongoose.model("Customer", CustomerSchema)
