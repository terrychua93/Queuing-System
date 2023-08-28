import './ButtonConfimationSection.css';
import { Box, Container, Text } from '@chakra-ui/react'
import { CheckIcon, EditIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup } from '@chakra-ui/react'

interface ButtonConfirmationSectionProps {
  selectedOption: (stepperOption: string) => void;
}

const ButtonConfirmationSection = (props: ButtonConfirmationSectionProps) => {
  return (
    <>
      <ButtonGroup width={'100%'} justifyContent='center'>
        <Button borderRadius={'20px'} w='50%' h='100%' pt='1rem' pb='1rem' bgColor={'#778Ba5'} colorScheme='blackAlpha' onClick={() => props.selectedOption("Prev")}>
          <Box className="ButtonConfimationSection_BoxSelection" color='white' >
            <Container display='flex' justifyContent='center' mb={1}>
              <EditIcon className="ButtonConfimationSection_Icon" fontSize={'1.7rem'} />
            </Container>
            <Container display='flex' justifyContent='center' alignItems={'center'}>
              <Text className='ButtonConfimationSection_Text' fontWeight='500' color='whiteAlpha'>Edit</Text>
            </Container>
          </Box>
        </Button>
        <Button borderRadius={'20px'} w='50%' h='100%' pt='1rem' pb='1rem' bgColor={'#008080'} colorScheme='blackAlpha' onClick={() => props.selectedOption("Next")}>
          <Box className="ButtonConfimationSection_BoxSelection" color='white' >
            <Container display='flex' justifyContent='center'>
              <CheckIcon className="ButtonConfimationSection_Icon" fontSize={'2rem'} />
            </Container>
            <Container display='flex' justifyContent='center' alignItems={'center'}>
              <Text className='ButtonConfimationSection_Text' fontWeight='500' color='whiteAlpha'>Confirm</Text>
            </Container>
          </Box></Button>
      </ButtonGroup>
    </>

  );
};

export default ButtonConfirmationSection;