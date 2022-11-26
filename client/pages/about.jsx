import React from 'react'
import {Flex, Heading} from '@chakra-ui/react'
const About = () => {
  return (
	<Flex data-aos="fade-in" as="main" role="main" justify="center" >
		<Flex h='100vh' w='full' align="center" justify="center" backgroundImage="url('/images/Aboutbg.png')" bgSize="cover" backgroundRepeat="no-repeat">
			<Heading as='h1' data-aos="fade-up" data-aos-easing="ease-out-cubic"  data-aos-offset="0" data-aos-delay="2200" data-textAlign={{base:"center", md:"center"}} align={{base:"center", md:"center"}} justify="center" fontSize={{xs:"50",sm:60,md:60,lg:100}} textShadow="black 1px 1px 1px" color="#FFFFFF" >About Aubrey's</Heading>

		</Flex>
		

	</Flex>
  )
}

export default About
