const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
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

export default mongoose.models['Inventory'] || mongoose.model("Inventory", InventorySchema)