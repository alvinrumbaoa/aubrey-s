import React,{useEffect} from "react"
import {Flex} from '@chakra-ui/react'
import "aos/dist/aos.css"
import Aos from "aos";
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children}) => {

	useEffect(() =>{
		Aos.init({duration: 6000})
	},[]);
	
	


	return (
		<Flex  background="#FEDADA" direction="column" >
			<Nav/>
				{children}
			<Footer/>
		</Flex>	)

}

export default Layout