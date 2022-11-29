import React,{useState} from 'react'
import {Box, Flex, Heading, Input, Text, Link, Button} from '@chakra-ui/react'

const add = () => {
   const [form, setForm] = useState({
		productName:'',
		quantity:0,
		price:0,
		description:'',
		
   })

  return (
		<Flex>
		<Heading>Create new Product</Heading>
		<Input/>
		</Flex>
  )
}

export default add
