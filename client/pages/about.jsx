import React from 'react'
import {Flex, Heading, Image, Text, Button, SimpleGrid,  Box} from '@chakra-ui/react'
import { motion } from 'framer-motion'
const MotionBox = motion(Box)


const About = () => {
  return (
	<Flex data-aos="fade-in" as="main" role="main" justify="center" direction="column">
		<Flex   w='full' align="center" justify="center">
			<Image src="/images/Aboutbg.png" alt="about banner" w='full' object="cover"/>

		</Flex>
		<Flex p={20}  w='full' align="center" direction={{base:"column",sm:"column",lg:"row"}}  justify="space-between">
			<Image src="/images/elaine.png" boxSize={{xs:300, sm: 400, md:500, lg:550}} />
			<Box w='50%'>
				<Heading mt="20" fontSize="75" textAlign="center" color="#BC2973">Meet Our CEO</Heading>
				<Text  textAlign="center"mt={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mollis venenatis. Curabitur iaculis metus ac risus euismod dapibus. Nam scelerisque, arcu eget ultricies euismod, nisi magna tempor orci, sed condimentum quam nulla id ex. Fusce vestibulum iaculis tortor, sit amet pulvinar dui cursus sit amet. Proin a euismod nisi. Fusce tristique sodales tristique. Fusce mattis iaculis molestie. Vestibulum id vulputate nisl, a tempus ipsum. Curabitur sodales nisi in arcu pharetra, eget varius est gravida.</Text>
			</Box>
		</Flex>
		<Flex p={20} background="#BC2973"  w='full' align="center" justify="space-around" direction="column">
			<Heading color="#FFFFFF" fontSize="70">Who We Are</Heading>
			<Flex align="center" justify="space-around" direction={{base:"column",sm:"column",lg:"row"}}>
					<Box boxSize="300px"  align="center" justify="center" boxShadow='2xl' rounded={'lg'} m={10} p={5} background="#FEDADA" >
						<Image src="/images/Cleansing.png"/>
						<Text mt={2} as='b' fontSize="xl">All Prducts Tested  Proven</Text>
						<Text>Lorem ipsum dolor sit amet</Text>
					</Box>

					<Box boxSize="300px" align="center" justify="center"boxShadow='2xl' rounded={'lg'} m={10} p={5} background="#FEDADA">
						<Image src="/images/Helping Hand.png"/>
						<Text mt={2} as='b' fontSize="xl">All Prducts Tested  Proven</Text>
						<Text>Lorem ipsum dolor sit amet</Text>
					</Box>

					<Box boxSize="300px" align="center" justify="center" boxShadow='2xl' rounded={'lg'} m={10} p={5} background="#FEDADA">
						<Image src="/images/Response.png"/>
						<Text mt={2} as='b' fontSize="xl">All Prducts Tested  Proven</Text>
						<Text>Lorem ipsum dolor sit amet</Text>
					</Box>
			</Flex>
			<Button>Be Affiliated</Button>
		</Flex>
		<Flex p={10} align="center" direction="column" justify="center">
			<Heading m={5} textAlign="center" color="#BC2973" fontSize="70" >Certified Distributor</Heading>
			<Flex align="center" justify="space-around" direction={{base:"column",sm:"column",lg:"row"}}>
					<Image p={5} src="/images/disti1.jpg" boxSize={300}/>
					<Image p={5} src="/images/disti2.jpg" boxSize={300}/>
					<Image p={5} src="/images/disti3.jpg" boxSize={300}/>
					<Image p={5} src="/images/disti4.jpg" boxSize={300}/>
					<Image p={5} src="/images/disti5.jpg" boxSize={300}/>

				</Flex>
		</Flex>
		<Flex data-aos="fade-up" p={20} h="" w='full' align="center" justify="center"  direction={{base:"column",sm:"column",lg:"column"}}>
			<Heading m={5} textAlign="center" color="#BC2973" fontSize="70">Our Story</Heading>
			<Image src="/images/story.png" object="cover" boxSize="450" />
			<Text mt={2} >Lorem ipsum dolor sit amet</Text>
		</Flex>
		</Flex>
  )
}

export default About
