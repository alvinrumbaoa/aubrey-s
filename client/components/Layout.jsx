import React,{useEffect} from "react"
import {Flex} from '@chakra-ui/react'
import "aos/dist/aos.css"
import Aos from "aos";
import Nav from './Nav'
import Footer from './Footer'
import { chakra , shouldForwardProp} from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
const MotionFlex = motion(Flex)

const Layout = ({children}) => {

	const ChakraBox = chakra(motion.div, {
		/**
		 * Allow motion props and non-Chakra props to be forwarded.
		 */
		shouldForwardProp: (children) => isValidMotionProp(children) || shouldForwardProp(children),
	  });

	useEffect(() =>{
		Aos.init({duration: 1000})
	},[]);
	
	


	return (
		<MotionFlex  background="#FEDADA" direction="column"initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: 1.0}} >
			<Nav/>
				{children}
			<Footer/>
		</MotionFlex>	)

}

export default Layout