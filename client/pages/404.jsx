import React from 'react'
import { Flex, Text, Heading } from '@chakra-ui/react'
const notFound = () => {
  return (
	<div>
		<Heading >Not Found</Heading>
      		<Text>
        	The requested page doesn't exist or you don't have access to it.
     	 </Text>
	</div>
  )
}

export default notFound
