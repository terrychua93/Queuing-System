import React from 'react';
import './ButtonSection.css';
import { Box, Container, Flex, Text, Image, Wrap, WrapItem, ScaleFade, IconButton } from '@chakra-ui/react'
import home from '../../../utils/images/icons8-home.png'
import { CloseIcon, CheckIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup } from '@chakra-ui/react'
interface ButtonSectionProps {
  isDisabled: boolean;
  selectedOption: (stepperOption: string) => void;
}

const ButtonSection = (props: ButtonSectionProps) => {
  return (
    <>
      <ButtonGroup width={'100%'} justifyContent='center'>
        <Button isDisabled={props.isDisabled} borderRadius={'20px'} w='50%' h='100%' pt='1rem' pb='1rem' bgColor={'#f7c635'} colorScheme='blackAlpha' onClick={() => props.selectedOption("Next")}>
          <Box className="ButtonSection_BoxSelection" color='white' >
            <Container display='flex' justifyContent='center'>
              <CheckIcon className="ButtonSection_Icon" fontSize={'2rem'} />
            </Container>
            <Container display='flex' justifyContent='center' alignItems={'center'}>
              <Text className='ButtonSection_Text' fontWeight='500' color='whiteAlpha'>Accept</Text>
            </Container>
          </Box></Button>
        <Button borderRadius={'20px'} w='50%' h='100%' pt='1rem' pb='1rem' bgColor={'#778Ba5'} colorScheme='blackAlpha' onClick={() => props.selectedOption("Skip")}>
          <Box className="ButtonSection_BoxSelection" color='white' >
            <Container display='flex' justifyContent='center' mb={1}>
              <CloseIcon className="ButtonSection_Icon" fontSize={'1.7rem'} />
            </Container>
            <Container display='flex' justifyContent='center' alignItems={'center'}>
              <Text className='ButtonSection_Text' fontWeight='500' color='whiteAlpha'>Skip</Text>
            </Container>
          </Box>
        </Button>

      </ButtonGroup>
      <ButtonGroup width={'100%'} justifyContent='center' mt='2'>
        <Button borderRadius={'20px'} w='100%' h='100%' pt='1rem' pb='1rem' bgColor={'#e3e3e3'} colorScheme='cyan' onClick={() => props.selectedOption("Home")}>
          <Box className="ButtonSection_BoxSelection_BackHome" flexDirection={'row'}>
            <Container display='flex' justifyContent='center'>
              <Image className="Box_Selection_Image" src={home} alt='Dan Abramov' width={35} height={35} />
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