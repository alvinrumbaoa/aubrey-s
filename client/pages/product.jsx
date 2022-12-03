import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import { Flex, Box,Button, Image, SimpleGrid,Input, CardBody, Text, Heading, Grid, GridItem} from '@chakra-ui/react'
const product = ({data }) => {
		const url = data.product._id;
  return (
	<Flex m={10} justify='center' align="center" direction="column">
		<Input type="text" />
		<Heading color="#BC2973" fontSize="70">Products</Heading>
		<SimpleGrid p={10} columns={[1, 1, 1, 3]} spacing="40px">
		{
		data.product.map((item) => (
					<Link  key={item.id} href={{
						pathname: '/api/products/[slug]',
						query: { slug: `${item._id}`},
					  }} >
							<Box m={10} p={20} background="#BC2973" boxShadow="black 2px 2px 10px" borderRadius="lg" >
								<Image key={item.id} src={item.imageURL1} boxSize={300}/>
							
								<Heading key={item.id} color="white">{item.productName}</Heading>
								<Text key={item.id} color="white">{item.description}</Text>
								<Text key={item.id} color="white">PHP {item.price}</Text>
								<Button>Buy Now</Button>
							
							</Box>
					</Link>
						
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
export default product
