import Head from 'next/head'
import {Flex, Box, Container, Text, Heading} from '@chakra-ui/react';
import Image from 'next/image'

export default function Home() {
  return (
    <Box >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex as="main" role="main" direction="column" flex="1" py="16" >
      <Container flex="1">
        <Text>Main</Text> 
      </Container>
    </Flex>
      
    </Box>
  )
}
