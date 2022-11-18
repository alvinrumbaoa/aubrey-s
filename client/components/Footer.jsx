import {
	Box,
	chakra,
	Container,
	Link,
	SimpleGrid,
	Stack,
	Image,
	Text,
	VisuallyHidden,
	Input,
	IconButton,
	useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  
  
  
  const SocialButton = ({
	children,
	label,
	href,
  }) => {
	return (
	  <chakra.button
		bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
		rounded={'full'}
		w={8}
		h={8}
		cursor={'pointer'}
		as={'a'}
		href={href}
		display={'inline-flex'}
		alignItems={'center'}
		justifyContent={'center'}
		transition={'background 0.3s ease'}
		_hover={{
		  bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
		}}>
		<VisuallyHidden>{label}</VisuallyHidden>
		{children}
	  </chakra.button>
	);
  };
  
  const ListHeader = ({ children }) => {
	return (
	  <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
		{children}
	  </Text>
	);
  };
  
  export default function LargeWithNewsletter() {
	return (
	  <Box
		bg={useColorModeValue('gray.100', 'gray.900')}
		color={useColorModeValue('gray.700', 'gray.200')}>
		<Container as={Stack} maxW={'6xl'} py={10}>
		  <SimpleGrid
			templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
			spacing={8}>
			<Stack spacing={6}>
			  <Box>
				<Image src="/images/logo.svg"/>
			  </Box>
			  <Text fontSize={'sm'}>
				© 2022 Aubrey's Curations. All rights reserved
			  </Text>
			  <Stack direction={'row'} spacing={6}>
				<SocialButton label={'Twitter'} href={'#'}>
				  <FaTwitter />
				</SocialButton>
				<SocialButton label={'YouTube'} href={'#'}>
				  <FaYoutube />
				</SocialButton>
				<SocialButton label={'Instagram'} href={'#'}>
				  <FaInstagram />
				</SocialButton>
				<SocialButton label={'Tiktok'} href={'#'}>
				  <FaTiktok />
				</SocialButton>
			  </Stack>
			</Stack>
			<Stack align={'flex-start'}>
			  <ListHeader>Company</ListHeader>
			  <Link href={'/about'}>About us</Link>
			  <Link href={'/blog'}>Blog</Link>
			  <Link href={'/contact'}>Contact us</Link>
			</Stack>
			<Stack align={'flex-start'}>
			  <ListHeader>Support</ListHeader>
			  <Link href={'#'}>Help Center</Link>
			  <Link href={'#'}>Terms of Service</Link>
			  <Link href={'#'}>Legal</Link>
			  <Link href={'#'}>Privacy Policy</Link>
			</Stack>
			<Stack align={'flex-start'}>
			  <ListHeader>Stay up to date</ListHeader>
			  <Stack direction={'row'}>
				<Input
				  placeholder={'Your email address'}
				  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
				  border={0}
				  _focus={{
					bg: 'whiteAlpha.300',
				  }}
				/>
				<IconButton
				  bg={useColorModeValue('green.400', 'green.800')}
				  color={useColorModeValue('white', 'gray.800')}
				  _hover={{
					bg: 'green.600',
				  }}
				  aria-label="Subscribe"
				  icon={<BiMailSend />}
				/>
			  </Stack>
			</Stack>
		  </SimpleGrid>
		</Container>
	  </Box>
	);
  }