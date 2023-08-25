import React from 'react';
import './PassportNumber.css';
import { Box, Container, Flex, Text, Image, Wrap, WrapItem, ScaleFade, InputGroup, Input, InputLeftAddon } from '@chakra-ui/react'
import ticket from '../../utils/images/icons8-ticket.png'
import calendar from '../../utils/images/icons8-calendar.png'
import ButtonSection from '../ButtonSection/ButtonSection';


interface PassportNumberProps {
  selectedOption: () => void;
}

const PassportNumber = (props: PassportNumberProps) => {
  return (
    <Container mt='10' mb='5' className="Header_Container" maxW='600px' centerContent>
      <ScaleFade initialScale={0.9} in={true} style={{ width: '100%' }}>
        <InputGroup mb={5}>
          <Input type='text' placeholder='passport number' />
        </InputGroup>
        <ButtonSection selectedOption={() => props.selectedOption()} />

      </ScaleFade>
    </Container>
  );
};

export default PassportNumber;