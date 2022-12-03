import React,{useState} from 'react'
import axios from 'axios'
import {Link} from 'next/link'
import { useRouter } from 'next/router'
import {Box, Container, NumberInput,Textarea,NumberInputStepper,NumberInputField,  NumberIncrementStepper, NumberDecrementStepper, Flex, Heading, FormLabel, Input, Text, FormControl,  Button} from '@chakra-ui/react'

const add = () => {
	const router = useRouter();
   const [form, setForm] = useState({
		productName:'',
		quantity:0,
		price:0,
		description:'',
		imageURL1: '',
		imageURL2: '',
		imageURL3: '',
		order:0,
		instock:0
   })
   const handleChange = (e) =>{
	   setForm({
		   ...form,
		   [e.target.name]: e.target.value
	   })

   }
   console.log(form)
   	const handleForm = async(e) =>{
		   e.preventDefault()
		  	axios.post('http://localhost:3000/api/products/' ,{
				...form
			})
			 
			 .then((res) => {
                if(res.data.errors) {
                    console.log(res.data.errors)
                }
                else {
                    console.log(res.data)
					router.push('/admin')
                }
            })
            .catch((err) => {
                console.log(err);
            })
	 }


  return (
		<Container p={20} background="#BC2973">
		<Heading color="white">Create new Product</Heading>
		<form onSubmit={handleForm}>
			<FormLabel mt={2} color="white">Product Name</FormLabel>
			<Input variant='filled' type="text" onChange={handleChange} label="productName" name="productName" />
			<FormLabel mt={2} color="white">Quantity</FormLabel>
			<Input variant='filled'type="number" onChange={handleChange} label="quantity"  name="quantity"/>
			<FormLabel mt={2} color="white">Price</FormLabel>
			<NumberInput variant='filled' max={1000} min={10}>
				<NumberInputField onChange={handleChange} label="price" name="price"/>
				<NumberInputStepper>
				<NumberIncrementStepper />
				<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
			<FormLabel>Description</FormLabel>
			<Textarea
				variant='filled'
				label="description"
				name="description"
				onChange={handleChange}
				placeholder='Here is a sample placeholder'
				size='sm'
			/>
			<FormLabel>Image</FormLabel>
			<Input variant='filled' type="text" onChange={handleChange} label="imageURL1" name="imageURL1" />
			
			<Button mt={2} type="submit">Submit</Button>
		</form>
	
		</Container>
  )
}

export default add
