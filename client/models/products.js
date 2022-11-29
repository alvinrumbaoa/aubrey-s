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
	imageURL1:{
		type:String,
	},
	imageURL2:{
		type:String,
	},
	imageURL3:{
		type:String,
	},
	order:{
		type:Number	
	},
	instock:{
		type:Number	
	}
	
})

export default mongoose.models['Product'] || mongoose.model("Product", ProductSchema)