import React from 'react'
import {Flex, Box,useDisclosure, IconButton, Button, Stack, Tooltip,Fade, Image,Link,Heading, HStack, VStack, Text} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';	

const Nav = () => {

	const { isOpen, onOpen, onClose } = useDisclosure();

  return (
	<Flex as="nav" m={5} p={5} role="navigation" justify="space-between" bg="bg-accent">
				<Flex>
					<Tooltip label="Home" >
						<Link href="/"><Image src="/images/Logo.png" alt="logo" w="100" h="120" align="center" justify="center" p={{sm:7}} mt={{lg:6}} /></Link>
					</Tooltip>
				</Flex>
			<Flex display="flex" justify="center"  direction="column">
			<IconButton mt={3} 
            size={'sm'}
			justify="center"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            	/>
			{ 
			isOpen ? (
			<Fade in={isOpen}>
			<Box  display={{ sm:'flex', md: 'none' }}>
				<Stack as={'nav'} spacing={2}>
					<Tooltip label="Home" >
						<Button m={1} as="Button" size="lg" color="#C2176C" bg="none" fontWeight="bold"  variant='ghost'><Link href="/">Home</Link></Button>
					</Tooltip>
					<Tooltip label="About" >   
						<Button m={1} size="lg" color="#C2176C"bg="none"fontWeight="bold"   variant='ghost'><Link href="/about">About</Link></Button>	
					</Tooltip>
					<Tooltip label="Product" > 
						<Button m={1} s	ize="lg" color="#C2176C" bg="none" fontWeight="bold" variant='ghost'><Link href="/projects">Projects</Link></Button>
					</Tooltip>
					<Tooltip label="Blog" > 
						<Button m={1} size="lg" color="#C2176C" bg="none"  variant='solid'><Link href="/blog">Blog</Link></Button>
					</Tooltip>
					<Tooltip label="Contact" >  
						<Button m={1} size="lg"  color="#C2176C" bg="none" fontWeight="bold" variant='ghost'><Link href="https://us8.list-manage.com/contact-form?u=afec8b25509efb15bea95304a&form_id=94569d40ba7c7c0dcb1310a7c2eb11b2">Contact</Link></Button>
					</Tooltip>			
				</Stack>
			</Box>
			</Fade>
			) : null}
			</Flex>
			<Flex p={10} justify="center" display={{ base: 'none', md: 'flex' }}>
					<Tooltip label="Home" >
						<Button m={3}  size="lg"  color="#C2176C" bg="none" fontWeight="bold"  variant='solid'><Link href="/">Home</Link></Button>
					</Tooltip>
					<Tooltip label="About" >   
						<Button m={3} size="lg" color="#C2176C"bg="none" fontWeight="bold"  variant='solid'><Link href="/about">About</Link></Button>	
					</Tooltip>
					<Tooltip label="Product" > 
						<Button m={3} size="lg" color="#C2176C" bg="none" fontWeight="bold"  variant='solid'><Link href="/projects">Projects</Link></Button>
					</Tooltip>
					<Tooltip label="Blog" > 
						<Button m={3} size="lg" color="#C2176C" bg="none" variant='solid'><Link href="/blog">Blog</Link></Button>
					</Tooltip>
					<Tooltip label="Contact" >  
						<Button m={3} size="lg"  color="#C2176C" bg="none" fontWeight="bold"  variant='solid'><Link href="https://us8.list-manage.com/contact-form?u=afec8b25509efb15bea95304a&form_id=94569d40ba7c7c0dcb1310a7c2eb11b2">Contact</Link></Button>
					</Tooltip>
				
					
			</Flex>
    </Flex>
    )
}

export default Nav
