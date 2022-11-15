import { extendTheme } from '@chakra-ui/react'
import "@fontsource/cormorant-sc"
import "@fontsource/poppins"
// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: '400px',
  md: '700px',
  lg: '920px',
  xl: '1440px',
  '2xl': '1536px',
}

const theme = extendTheme({

  breakpoints,
  fonts: {
    heading: '"Cormorant SC", serif;  ',
    body: '"Poppins", sans-serif;',
  
  },
 
})

export default theme