import React from 'react';
import './MainPage.css';
import { Box, Container, Flex, Text, Image, Wrap, WrapItem, ScaleFade } from '@chakra-ui/react'
import ticket from '../../utils/images/icons8-ticket.png'
import calendar from '../../utils/images/icons8-calendar.png'


interface MainPageProps {
  selectedOption: (stepperOption: string) => void;
}

const MainPage = (props: MainPageProps) => {
  return (
    <ScaleFade initialScale={0.9} in={true} style={{ width: '100%' }}>
      <Wrap justify='center' spacing='5px' width={'100%'} flexFlow={'column'}>
        <WrapItem className='MainPage_WrapItem'>
          <Box borderRadius={'xl'} className="MainPage_BoxSelection" bg='#3f87bb' w='100%' h='100%' p={3} color='white' onClick={(e) => props.selectedOption("Next")}>
            <Container display='flex' justifyContent='center'>
              <Image className="Box_Selection_Image" src={ticket} alt='Dan Abramov' />
            </Container>
            <Container h='80px' display='flex' justifyContent='center' alignItems={'center'}>
              <Text className='MainPage_Text' fontWeight='500' color='whiteAlpha'>Tap here for Queue Ticket</Text>
            </Container>

          </Box>
        </WrapItem>


        <WrapItem className='MainPage_WrapItem'>
          <Box borderRadius={'xl'} className="MainPage_BoxSelection" bg='#f7c635' w='100%' h='100%' p={3} color='white' onClick={() => props.selectedOption("Next")}>
            <Container display='flex' justifyContent='center'>
              <Image className="Box_Selection_Image" src={calendar} alt='Dan Abramov' />
            </Container>
            <Container h='80px' display='flex' justifyContent='center' alignItems={'center'}>
              <Text className='MainPage_Text' fontWeight='500' color='whiteAlpha'>I have an Endoscopy Procedure Appointment</Text>
            </Container>
          </Box>
        </WrapItem>

      </Wrap>
    </ScaleFade>
  );
};

export default MainPage;