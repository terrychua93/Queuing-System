import React, { useEffect, useRef, useState } from 'react';
import './MobileNumber.css';
import { Box, Container, Flex, Text, Image, Wrap, WrapItem, ScaleFade, IconButton, Input, InputGroup, InputLeftElement, Stack, InputLeftAddon } from '@chakra-ui/react'
import ticket from '../../../utils/images/icons8-ticket.png'
import calendar from '../../../utils/images/icons8-calendar.png'
import { CloseIcon, CheckIcon, ArrowBackIcon, PhoneIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup } from '@chakra-ui/react'
import ButtonSection from '../ButtonSection/ButtonSection';

interface MobileNumberProps {
  defaultValue: string;
  inputHandler: (inputValue: string) => void;
  selectedOption: (stepperOption: string) => void;
}



const MobileNumber = (props: MobileNumberProps) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const inputElement = useRef<HTMLInputElement>(null);
  const getMobileNumber = (e: any) => {
    setIsDisabled(e.target.value.length > 0 ? false : true);
    props.inputHandler(e.target.value);
  }

  useEffect(() => {
    setIsDisabled(inputElement?.current?.value === null || inputElement?.current?.value === '')
  }, []);

  return (
    <Container mt='2' mb='5' className="Header_Container" maxW='510px'>

      <ScaleFade initialScale={0.9} in={true} style={{ width: '100%' }} >
        <Text fontWeight={'bolder'} mb='8px' textAlign={'start'}>Please input your mobile number</Text>

        <InputGroup mb={5}>
          <InputLeftAddon children='+65' />
          <Input ref={inputElement} type='text' value={props.defaultValue} placeholder='phone number' max='8' onChange={getMobileNumber} onInput={(event: React.ChangeEvent<HTMLInputElement>) => event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')} />
        </InputGroup>
        <ButtonSection isDisabled={isDisabled} selectedOption={(e: string) => props.selectedOption(e)} />

      </ScaleFade>
    </Container>

  );
};

export default MobileNumber;