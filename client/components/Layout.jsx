import React,{useEffect} from "react"
import {Flex} from '@chakra-ui/react'
import Aos from "aos";
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import "aos/dist/aos.css"

const Layout = ({children}) => {
	return (
		<Flex background="#FEDADA" direction="column" >
			<Nav/>
				{children}
			<Footer/>
		</Flex>
	)

}

export default Layout