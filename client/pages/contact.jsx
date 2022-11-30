import React from 'react'
import {Box, Heading, Flex, AspectRatio, Text,FormLabel, Image, Link, Button, FormControl, Input} from '@chakra-ui/react'



const contact = () => {
  return (
	<Flex direction="column" justify="center">


	<Flex m={10} align="center"direction="row">
		<AspectRatio w='900px'h='800px'  ratio={1}>
			<video
					title='contact video'
					src='/videos/contact.mp4'
					allowFullScreen
					autoplay='true'
					loop='true'
				/>
		</AspectRatio>
		<Flex p={20}  h={"800px"} w={"900px"}  background="#BC2973"   justify="center" align="center"direction="column">
			<Heading fontSize="60" color="white">Love to Hear from you, Get in Touch. </Heading>
			<FormControl isRequired>
				<FormLabel color="white">First name</FormLabel>
				<Input type="text" placeholder="First Name"/>
				<FormLabel color="white">Last Name</FormLabel>
				<Input type="text" placeholder="Last Name"/>
				<FormLabel color="white">Email</FormLabel>
				<Input type="email" placeholder="Email"/>
				<FormLabel color="white">Phone Number</FormLabel>
				<Input type="tel" placeholder="Phone Number"/>
				<Button mt={5} type="submit">Submit</Button>
			</FormControl>
			
		</Flex>
	</Flex>
	</Flex>
  )
}

export default contact
