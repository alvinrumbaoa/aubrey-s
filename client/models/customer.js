const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
	firstName:{
		type: String,
		required: true,
		unique: true,
	},
	lastName:{
		type: String,
		required: true,
		unique: true,
	},
	email:{
		type: String,
		required: true,
		unique: true,
	},
	address:{
		type: String,
		required: true,
		unique: true,
	},
	

})

export default mongoose.models['Customer'] || mongoose.model("Customer", CustomerSchema)
