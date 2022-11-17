const mongoose = require("mongoose");

const OrderSchema =  new mongoose.Schema({
	inStock:{
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	backOrder:{
		type: String,
	},
	Order:{
		type:String,
	}
})

export default mongoose.models['Order'] || mongoose.model("Order", OrderSchema)