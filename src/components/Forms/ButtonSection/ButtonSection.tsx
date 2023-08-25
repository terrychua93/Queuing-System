import React from 'react';
import './ButtonSection.css';
import { Box, Container, Flex, Text, Image, Wrap, WrapItem, ScaleFade, IconButton } from '@chakra-ui/react'
import ticket from '../../../utils/images/icons8-ticket.png'
import calendar from '../../../utils/images/icons8-calendar.png'
import { CloseIcon, CheckIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup } from '@chakra-ui/react'

interface LoadingScreenProps {
  selectedOption: () => void;
}

const ButtonSection = (props: LoadingScreenProps) => {
  return (
    <>
      <ButtonGroup width={'100%'} justifyContent='center'>
        <Button borderRadius={0} w='300px' h='100px' bgColor={'#778Ba5'} colorScheme='blackAlpha' onClick={() => props.selectedOption()}>
          <Box className="ButtonSection_BoxSelection" color='white' >
            <Container display='flex' justifyContent='center' mb={1}>
              <CloseIcon className="ButtonSection_Icon" fontSize={'1.6rem'} />
            </Container>
            <Container display='flex' justifyContent='center' alignItems={'center'}>
              <Text className='ButtonSection_Text' fontWeight='500' color='whiteAlpha'>Skip</Text>
            </Container>
          </Box>
        </Button>
        <Button borderRadius={0} w='300px' h='100px' bgColor={'#008080'} colorScheme='blackAlpha' onClick={() => props.selectedOption()}>
          <Box className="ButtonSection_BoxSelection" color='white' >
            <Container display='flex' justifyContent='center'>
              <CheckIcon className="ButtonSection_Icon" fontSize={'2rem'} />
            </Container>
            <Container display='flex' justifyContent='center' alignItems={'center'}>
              <Text className='ButtonSection_Text' fontWeight='500' color='whiteAlpha'>Accept</Text>
            </Container>
          </Box></Button>
      </ButtonGroup>
      <ButtonGroup width={'100%'} justifyContent='center' mt='2'>
        <Button borderRadius={0} w='608px' h='100px' bgColor={'#e3e3e3'} colorScheme='cyan' onClick={() => props.selectedOption()}>
          <Box className="ButtonSection_BoxSelection_BackHome" flexDirection={'row'}>
            <Container display='flex' justifyContent='center'>
              <ArrowBackIcon className="ButtonSection_ArrowBackIcon" fontSize={'2.4rem'} />
            </Container>
            <Container display='flex' justifyContent='center' alignItems={'center'}>
              <Text className='ButtonSection_Text' fontWeight='500' color='#000000'>Back To Home</Text>
            </Container>
          </Box>
        </Button>
      </ButtonGroup>
    </>

  );
};

export default ButtonSection;