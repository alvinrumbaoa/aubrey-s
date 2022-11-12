const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	productName:{
		type: String,
		required: true,
		unique: true,
	},
	quantity:{
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description:{
		type: String,
	},
})

export default mongoose.models['Product'] || mongoose.model("Product", ProductSchema)