const mongoose = require("mongoose");

const MailingListSchema = new mongoose.Schema({
	email:{
		type: String,
		required: true,
		unique: true,
	},
})

export default mongoose.models['MailingList'] || mongoose.model("MailingList", MailingListSchema)
