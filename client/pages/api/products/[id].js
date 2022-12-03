import dbConnect  from '../../../db/dbconnect'
import Product from '../../../models/products'
dbConnect();



export default async(req, res) =>{
	const { 
		query: {id},
		method
	} = req

	switch (method) {
		//add id
		case 'GET':
			try{
				const products = await Product.findById(id)
				if(!products){
					res.status(400).json({success: false})
				}
					res.status(200).json({success: true, product: products})
			} catch(err){
				res.status(400).json({success: false})
			}
			break;
			//update id
			case 'PUT':
			try{
				const products = await Product.findByIdAndUpdate(id, req.body, {
					new: true,
					runValidators: true
				})
				if(!products){
					res.status(400).json({success: false})
				}
					res.status(200).json({success: true, product: products})
			} catch(err){
				res.status(400).json({success: false})
			}
			break;
			case 'DELETE':
			try{
				const products = await Product .deleteOne({_id: id})
				if(!products){
					res.status(400).json({success: false})
				}
					res.status(200).json({success: true, product: products})
			} catch(err){
				res.status(400).json({success: false})
			}
			break;
		default:
			break;

	}

}