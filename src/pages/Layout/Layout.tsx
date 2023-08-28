import { Outlet, Link } from "react-router-dom";
import MainPage from "../../components/Main/MainPage";
import { Box, Button, Container, Stepper, useSteps } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MobileNumber from "../../components/Forms/MobileNumber/MobileNumber";
import { useReducer, useState } from "react";
import PassportNumber from "../../components/Forms/PassportNumber/PassportNumber";
import Confirmation from "../../components/Forms/Confirmation/Confirmation";
import './Layout.css';
import QueuingPage from "../../components/QueuingPage/QueuingPage";



const Layout = () => {

  const [mobileNumber, setMobileNumber] = useState('');
  const [passportNumber, setPassportNumber] = useState('');

  const steps = [
    { title: 'First', description: 'Main Page' },
    { title: 'Second', description: 'Mobile Number' },
    { title: 'Third', description: 'Mobile Number Confirmation' },
    { title: 'Fourth', description: 'Passport Number' },
    { title: 'Fifth', description: 'Passport Number Confirmation' },
    { title: 'Sixth', description: 'Queue Number' },
  ]

  const { goToNext, goToPrevious, setActiveStep, activeStep } = useSteps({
    index: 1,
    count: steps.length,
  })


  const StepperReducer = (type: string) => {
    switch (type) {
      case 'Home':
        setActiveStep(1);
        break;
      case 'Next':
        goToNext();
        break;
      case 'Prev':
        goToPrevious();
        break;
      case 'Skip':
        setActiveStep(activeStep + 2);
        break;
      default:
        throw new Error();
    }
  }


  return (
    <Container className="Layout_Container" maxW='1000px'>
      <Header />
      <Box maxH={'100%'} minH={'290px'} display={'flex'} justifyContent={'center'}>
        <Stepper size='lg' colorScheme='red' index={activeStep}>
          {activeStep === 1 ? (<MainPage selectedOption={(e: string) => StepperReducer(e)} />) :
            activeStep === 2 ? (<MobileNumber defaultValue={mobileNumber} inputHandler={(e) => setMobileNumber(e)} selectedOption={(e: string) => StepperReducer(e)} />) :
              activeStep === 3 ? (<Confirmation confirmationType={'mobile'} displayValue={mobileNumber} selectedOption={(e: string) => StepperReducer(e)} />) :
                activeStep === 4 ? (<PassportNumber defaultValue={passportNumber} inputHandler={(e) => setPassportNumber(e)} selectedOption={(e: string) => StepperReducer(e)} />) :
                  activeStep === 5 ? (<Confirmation confirmationType={'passport'} displayValue={passportNumber} selectedOption={(e: string) => StepperReducer(e)} />) :
                    activeStep === 6 ? (<QueuingPage mobileNumber={mobileNumber} passportNumber={passportNumber} />) :
                      (<QueuingPage mobileNumber={mobileNumber} passportNumber={passportNumber} />)}
        </Stepper>

      </Box>


      {/* <p >{activeStep}</p> */}

      <Footer />
    </Container>
  )
};

export default Layout;