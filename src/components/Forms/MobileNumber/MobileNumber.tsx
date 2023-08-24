import React from 'react';
import './MobileNumber.css';
import { Box, Container, Flex, Text, Image, Wrap, WrapItem, ScaleFade } from '@chakra-ui/react'
import ticket from '../../../utils/images/icons8-ticket.png'
import calendar from '../../../utils/images/icons8-calendar.png'


interface LoadingScreenProps {
  selectedOption: () => void;
}

const MobileNumber = (props: LoadingScreenProps) => {
  return (
    <ScaleFade initialScale={0.9} in={true} style={{ width: '100%' }}>
      <Wrap justify='center' spacing='30px' width={'100%'}>
        <WrapItem className='MainPage_WrapItem'>
          <Box borderRadius={'xl'} className="Box_Selection" bg='#3f87bb' w='300px' h='250px' p={4} pl={0} pr={0} color='white' onClick={() => props.selectedOption()}>
            <Container display='flex' justifyContent='center'>
              <Image className="Box_Selection_Image" src={ticket} alt='Dan Abramov' />
            </Container>
            <Container h='120px' display='flex' justifyContent='center' alignItems={'center'}>
              <Text className='MainPage_Text' fontWeight='500' color='whiteAlpha'>Accept</Text>
            </Container>

          </Box>
        </WrapItem>


        <WrapItem className='MainPage_WrapItem'>
          <Box borderRadius={'xl'} className="Box_Selection" bg='#f7c635' w='300px' h='250px' p={4} pl={0} pr={0} color='white' onClick={() => props.selectedOption()}>
            <Container display='flex' justifyContent='center'>
              <Image className="Box_Selection_Image" src={calendar} alt='Dan Abramov' />
            </Container>
            <Container h='120px' display='flex' justifyContent='center' alignItems={'center'}>
              <Text className='MainPage_Text' fontWeight='500' color='whiteAlpha'>Skip</Text>
            </Container>
          </Box>
        </WrapItem>

      </Wrap>
    </ScaleFade>
  );
};

export default MobileNumber;