import React from 'react'
import {Flex, Box,useDisclosure, IconButton, Button, Stack, Tooltip,Fade, Image,Link,Heading, HStack, VStack, Text} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {FaHome, FaInfoCircle, FaShoppingBag, FaPhoneAlt} from 'react-icons/fa';
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
  } from '@chakra-ui/react'	

const Nav = () => {

	const { isOpen, onOpen, onClose } = useDisclosure();

  return (
	<Flex as="nav"  p={5} role="navigation" justify="space-between" bg="bg-accent">
				<Flex >
					<Tooltip label="Home" >
						<Link href="/"><Image src="/images/Logo.png" alt="logo"  align="center" justify="center" p={{sm:7}} mt={{lg:6}} /></Link>
					</Tooltip>
				</Flex>
			<Flex display="flex" justify="center" align="center"  direction="column">
			
			
			<Box  display={{ xs:'flex', sm:'flex', md: 'none' }}>
				<Menu>
					<MenuButton
						as={IconButton}
						aria-label='Options'
						icon={<HamburgerIcon />}
						variant='outline'
					/>
					<MenuList>
						<Link href="/">
							<MenuItem icon={<FaHome />}>
								Home
							</MenuItem>
						</Link>
						<Link href="/about">
							<MenuItem icon={<FaInfoCircle />}>
								About
							</MenuItem>
						</Link>
						<Link href="/products">
							<MenuItem icon={<FaShoppingBag />}>
								Product
							</MenuItem>
						</Link>
						<Link href="/contact">
							<MenuItem icon={<FaPhoneAlt />}>
								Contact	
							</MenuItem>
						</Link>
					</MenuList>
				</Menu>
			</Box>
			
			</Flex>
			<Flex p={10} justify="center" align="center" display={{ base: 'none', md: 'flex' }}>
					<Tooltip label="Home" >
						<Button m={1}  size="lg"  color="#C2176C" bg="none" fontWeight="bold"  variant='solid'><Link href="/">Home</Link></Button>
					</Tooltip>
					<Tooltip label="About" >   
						<Button m={1} size="lg" color="#C2176C"bg="none" fontWeight="bold"  variant='solid'><Link href="/about">About</Link></Button>	
					</Tooltip>
					<Tooltip label="Product" > 
						<Button m={1} size="lg" color="#C2176C" bg="none" fontWeight="bold"  variant='solid'><Link href="/product">Product</Link></Button>
					</Tooltip>
					<Tooltip label="Contact" >  
						<Button m={1} size="lg"  color="#C2176C" bg="none" fontWeight="bold"  variant='solid'><Link href="/contact">Contact</Link></Button>
					</Tooltip>
				
					
			</Flex>
    </Flex>
    )
}

export default Nav
