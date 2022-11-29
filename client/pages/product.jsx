import React from 'react'
import axios from 'axios'
import { Flex, Box,Button, Image, Card, CardBody, Text, Heading, Grid, GridItem} from '@chakra-ui/react'
const product = ({data }) => {


  return (
	<Flex m={10} justify='center' align="center" direction="column">
		<Heading>Products</Heading>
		<Flex m={10} justify='center' align="center" direction="row">
		{
		data.product.map((item) => (
			<Box m={10} p={20} background="#BC2973" boxShadow="black 2px 2px 10px" borderRadius="lg" >
				<Image key={item.id} src={item.imageURL1} boxSize={300}/>
				<Heading key={item.id} color="white">{item.productName}</Heading>
				<Text key={item.id} color="white">{item.description}</Text>
				<Text key={item.id} color="white">PHP {item.price}</Text>
			</Box>
		))
		}
		</Flex>
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
