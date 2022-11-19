import React from 'react'

const About = () => {
  return (
	<Flex  as="main" role="main" direction={{ sm: 'column', md: 'row', lg: 'row'  }} >
		<Heading as='h1' textAlign={{base:"center", md:"start"}} fontSize={{xs:"50",sm:60,md:60,lg:100}} textShadow="black 1px 1px 1px" color="#C2176C" >About Aubrey's</Heading>
	</Flex>
  )
}

export default About
