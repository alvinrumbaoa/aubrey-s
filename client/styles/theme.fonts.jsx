import { extendTheme } from '@chakra-ui/react'

import "@fontsource/inter"
// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: '420px',
  md: '700px',
  lg: '920px',
  xl: '1440px',
  '2xl': '1536px',
}

const theme = extendTheme({

  breakpoints,
  fonts: {
    heading: '"Inter", sans-serif; ',
    body: '"Inter", sans-serif; ',
  
  },
 
})

export default theme