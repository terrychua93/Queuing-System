import React from 'react';
import './MobileNumber.css';
import { Box, Container, Flex, Text, Image, Wrap, WrapItem, ScaleFade, IconButton, Input, InputGroup, InputLeftElement, Stack, InputLeftAddon } from '@chakra-ui/react'
import ticket from '../../../utils/images/icons8-ticket.png'
import calendar from '../../../utils/images/icons8-calendar.png'
import { CloseIcon, CheckIcon, ArrowBackIcon, PhoneIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup } from '@chakra-ui/react'
import ButtonSection from '../ButtonSection/ButtonSection';

interface LoadingScreenProps {
  selectedOption: () => void;
}

const MobileNumber = (props: LoadingScreenProps) => {
  return (
    <Container mt='10' mb='5' className="Header_Container" maxW='600px' centerContent>
      <ScaleFade initialScale={0.9} in={true} style={{ width: '100%' }}>
        <InputGroup mb={5}>
          <InputLeftAddon children='+65' />
          <Input type='tel' placeholder='phone number' />
        </InputGroup>
        <ButtonSection selectedOption={() => props.selectedOption()} />

      </ScaleFade>
    </Container>

  );
};

export default MobileNumber;