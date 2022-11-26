import {Spinner, Flex} from '@chakra-ui/react'



export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<Flex h="full" background="#FEDADA">
				<Spinner color='red.500' justifyContent="center" />
		</Flex>
		
	)
  }