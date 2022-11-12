
import * as React from 'react'
import {ArrowForwardIcon } from '@chakra-ui/icons'

import { ChakraProvider,Box,Center,Input,InputGroup } from '@chakra-ui/react'
import {

  FormControl,
  FormLabel,
  Button,
  InputRightElement,
  Image,
  Spacer,
  useToast
} from '@chakra-ui/react'

function App() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const toast = useToast()
  return (
    <ChakraProvider>
   
    <Center h='100%' marginTop="8%">
      
    <Box p={5}  textAlign="center" shadow='md' borderWidth='1px'>

    <FormControl>
    <Center  h='100px' color='white'>
    <Image
    boxSize='100px'
    objectFit='cover'
    src='https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo='
    alt='LOGO HERE'
  />
  </Center>
  <FormLabel>Username</FormLabel>
  <Input type='email' placeholder='Enter username'/>
  <FormLabel>Password</FormLabel>
  <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    
  <Button textAlign="right" variant='ghost' onClick={() =>
        toast({
          title: 'Contact admin to reset your password',
          status: 'info',
          duration: 9000,
          isClosable: true,
        })
      }
     >Forgot Password?</Button>
     <Spacer/>
  <Button 
  onClick={() =>
    toast({
      title: 'Coming soon',
      status: 'warning',
      duration: 9000,
      isClosable: true,
    })
  }
  
  rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
   Login
  </Button>
</FormControl>
        </Box>
</Center>
  </ChakraProvider>
  );
}

export default App;


