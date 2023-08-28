import './Confirmation.css';
import { Container, Text, ScaleFade } from '@chakra-ui/react'
import ButtonConfirmationSection from '../ButtonConfimationSection/ButtonConfimationSection';


interface ConfirmationProps {
  displayValue: string | null;
  confirmationType: string;
  selectedOption: (stepperOption: string) => void;
}

const Confirmation = (props: ConfirmationProps) => {
  return (
    <Container mt='2' mb='5' className="Header_Container" maxW='510px'>
      <ScaleFade initialScale={0.9} in={true} style={{ width: '100%' }} >
        <Text fontWeight={'bold'} mb='8px' textAlign={'start'} fontSize={'1.2rem'}>{props.confirmationType === 'mobile' ? 'Please confirm your mobile number' : 'Please confirm your NRIC / Passport'}</Text>

        <Text fontWeight={'bolder'} mt='10' mb='10' fontSize={'1.5rem'}>{props.confirmationType === 'mobile' ? '+65' : ''} {props.displayValue}</Text>
        <ButtonConfirmationSection selectedOption={(e: string) => props.selectedOption(e)} />

      </ScaleFade>
    </Container>

  );
};

export default Confirmation;