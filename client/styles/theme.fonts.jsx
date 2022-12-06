import { extendTheme } from '@chakra-ui/react'
import "@fontsource/poppins"
import "@fontsource/cormorant-sc"
// 2. Update the breakpoints as key-value pairs
const breakpoints = {
    xs: '20em', 
    sm: '30em',
    md: '50em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  
}

const theme = extendTheme({

  breakpoints,
    fonts: {
      heading: ' "Cormorant SC", serif;  ',
      body: '"Poppins", sans-serif;',
    },
})

export default theme