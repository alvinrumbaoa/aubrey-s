import React from 'react'
import axios from 'axios'
import {Box, Link, Heading,Button, Text, Input, Flex } from '@chakra-ui/react'

const index = () => {
  return (
	<Flex justify="center" align="center" direction="column">
		<Heading>Admin Panel</Heading>

		{/* display products */}
		



		<Button><Link href="/admin/add">Add Products</Link></Button>
	</Flex>	
  )
}

export default index
