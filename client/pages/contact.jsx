import {
	Container,
	Flex,
	Box,
	Heading,
	Text,
	IconButton,
	Image,
	Button,
	VStack,
	HStack,
	Wrap,
	WrapItem,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
  } from '@chakra-ui/react';
  import {
	MdPhone,
	MdEmail,
	MdLocationOn,
	MdFacebook,
	MdOutlineEmail,
  } from 'react-icons/md';
  import { BsPerson } from 'react-icons/bs';
  import {SiTiktok} from 'react-icons/si'
  import {GiShoppingBag} from 'react-icons/gi'
  
  export default function contact() {
	return (
	  <Container bg="#FEDADA" maxW="full" mt={0} centerContent overflow="hidden">
		<Flex>
		  <Box
			bg="#BC2973"
			color="white"
			borderRadius="lg"
			m={{ sm: 4, md: 16, lg: 10 }}
			p={{ sm: 5, md: 5, lg: 16 }}>
			<Box p={4}>
			  <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
				<WrapItem>
				  <Box>
					<Image src="/images/logo2.png" h="90" />
					<Heading textAlign="center">Contact</Heading>
					<Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
					  Fill up the form below to contact
					</Text>
					<Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
					  <VStack pl={0} spacing={3} alignItems="flex-start">
						<Button
						  size="md"
						  height="48px"
						  width="200px"
						  variant="ghost"
						  color="#DCE2FF"
						  _hover={{ border: '2px solid #1C6FEB' }}
						  leftIcon={<MdPhone color="white" size="20px" />}>
						  +91-988888888
						</Button>
						<Button
						  size="md"
						  height="48px"
						  width="200px"
						  variant="ghost"
						  color="#DCE2FF"
						  _hover={{ border: '2px solid #1C6FEB' }}
						  leftIcon={<MdEmail color="white" size="20px" />}>
						  aubreycurations@gmail.com
						</Button>
						<Button
						  size="md"
						  height="48px"
						  width="200px"
						  variant="ghost"
						  color="#DCE2FF"
						  _hover={{ border: '2px solid #1C6FEB' }}
						  leftIcon={<MdLocationOn color="white" size="20px" />}>
						  Karnavati, India
						</Button>
					  </VStack>
					</Box>
					<HStack
					  mt={{ lg: 10, md: 10 }}
					  spacing={5}
					  px={5}
					  alignItems="flex-start">
					  <IconButton
						aria-label="facebook"
						variant="ghost"
						size="lg"
						isRound={true}
						_hover={{ bg: '#0D74FF' }}
						icon={<MdFacebook size="28px" />}
					  />
					  <IconButton
						aria-label="tiktok"
						variant="ghost"
						size="lg"
						isRound={true}
						_hover={{ bg: '#0D74FF' }}
						icon={<SiTiktok size="28px" />}
					  />
					  <IconButton
						aria-label="discord"
						variant="ghost"
						size="lg"
						isRound={true}
						_hover={{ bg: '#0D74FF' }}
						icon={<GiShoppingBag size="28px" />}
					  />
					</HStack>
				  </Box>
				</WrapItem>
				<WrapItem>
				  <Box bg="white" borderRadius="lg">
					<Box m={8} color="#0B0E3F">
					  <VStack spacing={5}>
						<FormControl id="name">
						  <FormLabel>Your Name</FormLabel>
						  <InputGroup borderColor="#E0E1E7">
							<InputLeftElement
							  pointerEvents="none"
							  children={<BsPerson color="gray.800" />}
							/>
							<Input type="text" size="md" />
						  </InputGroup>
						</FormControl>
						<FormControl id="name">
						  <FormLabel>Mail</FormLabel>
						  <InputGroup borderColor="#E0E1E7">
							<InputLeftElement
							  pointerEvents="none"
							  children={<MdOutlineEmail color="gray.800" />}
							/>
							<Input type="text" size="md" />
						  </InputGroup>
						</FormControl>
						<FormControl id="name">
						  <FormLabel>Message</FormLabel>
						  <Textarea
							borderColor="gray.300"
							_hover={{
							  borderRadius: 'gray.300',
							}}
							placeholder="message"
						  />
						</FormControl>
						<FormControl id="name" float="right">
						  <Button
							variant="solid"
							bg="#0D74FF"
							color="white"
							_hover={{}}>
							Send Message
						  </Button>
						</FormControl>
					  </VStack>
					</Box>
				  </Box>
				</WrapItem>
			  </Wrap>
			</Box>
		  </Box>
		</Flex>
	  </Container>
	);
  }
