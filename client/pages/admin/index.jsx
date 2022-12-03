import React from 'react'
import axios from 'axios'
import {Box, Link, Heading,Button,SimpleGrid,Image, Text, Input, Flex } from '@chakra-ui/react'

const admin = ({data }) => {
		const url = data.product._id;
  return (
	<Flex m={10} justify='center' align="center" direction="column">
		<Input type="text" />
		<Button colorScheme="pink"><Link href='/admin/add'>Add Products</Link></Button>
		<Heading color="#BC2973" fontSize="70">Products</Heading>
		<SimpleGrid p={10} columns={[1, 1, 1, 3]} spacing="40px">
		{
		data.product.map((item) => (		
							<Box m={10} p={5} background="#BC2973" boxShadow="black 2px 2px 10px" borderRadius="lg" >
								<Heading key={item.id} color="white">{item.productName}</Heading>
								<Text key={item.id} color="white">{item.description}</Text>
								<Text key={item.id} color="white">PHP {item.price}</Text>
								<Button>Edit</Button>
								<Button>Remove</Button>
							</Box>				
		))
		}
		</SimpleGrid>
	</Flex>
  )
}


export async function getStaticProps() {
	// Fetch data from external API
	const res = await fetch(`http://aubrey-s.vercel.app/api/products`)
	const data = await res.json()
	console.log(data)
	// Pass data to the page via props
	return { props: { data } }
  }
export default admin
