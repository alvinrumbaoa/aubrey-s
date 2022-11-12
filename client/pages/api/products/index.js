import dbConnect  from '../../../db/dbconnect'
import Product from '../../../models/products'

dbConnect();

export default async(req, res) =>{
	const {method} = req

	switch(method) {
			case 'GET':
			try{
				const products = await Product.find({})
				res.status(200).json({success: true, product: products})
			}catch(err){
				res.status(400).json({success: false})
			}
			break;
			case 'POST':
			try{
				const products= await Product.create(req.body)
				res.status(200).json({success: true, product: products})
			}catch(err){
				res.status(400).json({success: false})
			}
			break;

		    default:
				res.status(400).json({success: false})
				break;
	}
}
//post products