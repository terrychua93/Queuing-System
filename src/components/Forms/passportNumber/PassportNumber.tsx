import React, { useEffect, useRef, useState } from 'react';
import './PassportNumber.css';
import { Container, Text, ScaleFade, InputGroup, Input } from '@chakra-ui/react'
import ButtonSection from '../ButtonSection/ButtonSection';


interface PassportNumberProps {
  defaultValue: string;
  inputHandler: (inputValue: string) => void;
  selectedOption: (stepperOption: string) => void;
}

const PassportNumber = (props: PassportNumberProps) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const inputElement = useRef<HTMLInputElement>(null);
  const getPassportNumber = (e: any) => {
    setIsDisabled(e.target.value.length > 0 ? false : true);
    props.inputHandler(e.target.value);
  }

  useEffect(() => {
    setIsDisabled(inputElement?.current?.value === null || inputElement?.current?.value === '')
  }, []);

  return (
    <Container mt='2' mb='5' className="Header_Container" maxW='510px'>
      <Text fontWeight={'bolder'} mb='8px' textAlign={'start'}>Please input your NRIC / Passport number</Text>
      <ScaleFade initialScale={0.9} in={true} style={{ width: '100%' }}>
        <InputGroup mb={5}>
          <Input ref={inputElement} type='text' value={props.defaultValue} placeholder='NRIC / Passport number' onChange={getPassportNumber} onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.target.value = event.target.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
          }} />
        </InputGroup>
        <ButtonSection isDisabled={isDisabled} selectedOption={(e: string) => props.selectedOption(e)} />

      </ScaleFade>
    </Container>
  );
};

export default PassportNumber;